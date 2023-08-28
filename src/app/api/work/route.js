import { connectDb } from "@/app/helper/db";
import { Work } from "@/app/models/work";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

connectDb();

//Create Work
export async function POST(request){
  
    try {
        const {title, description, userId}=await request.json();

        const authToken=request.cookies.get("authToken")?.value;
        const data=jwt.verify(authToken, process.env.JWT_KEY);
        
        console.log(data._id);
        
        const work= new Work({title, description, userId:data._id});

        const createdWork=await work.save();

        return NextResponse.json(createdWork,{
            message:"Work Created Sucessfully",
            status:201,
            
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Work not created",
            status:false
        })
        
    }
}

//Get All Work

export async function GET(request){
    let works=[];

    try {
         works= await Work.find();
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Something Error in Get Work",
            status:false
        })
        
    }

    return NextResponse.json(works);
}


