import { connectDb } from "@/app/helper/db";
import { User } from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

connectDb();

export async function GET(request){
  
    let users=[];

    try {
         users=await User.find();
    } catch (error) {
       return NextResponse.json({
            message:"Failed to Get Users",
            status:false
        })
    }
    return NextResponse.json(users);
}


export async function DELETE(request, {params}){

    const {userId}=params;
    
  try {

    await User.deleteOne({
        _id:userId
    });

    return NextResponse.json({
        message:"User Deleted !!",
        status:true
    })
  } catch (error) {
    return NextResponse.json({
        message:"User not Deleted",
        status:false
    })
  }
}

export async function POST(request){
    const {name, email, password, about, profileURL}=await request.json();

    const user=new User({
        name,
        email,
        password,
        about,
        profileURL
    })

    try {
        user.password= bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
        const createdUser=await user.save();

        const response=NextResponse.json(user, {
         
            status:201,
            message:"User Created Successfully"
        });

        return response;

    } catch (error) {
        return NextResponse.json({
            message:"Failed to create User",
            status:false
        })
        
    }

}