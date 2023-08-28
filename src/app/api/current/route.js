
import { User } from '@/app/models/user';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET(request){
   const authToken= request.cookies.get("authToken")?.value;
    console.log(authToken);
    const data= jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data);
    const user= await User.findById(data._id).select("-password");

    console.log("test");

    return NextResponse.json(user);
}