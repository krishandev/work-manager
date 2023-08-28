import { User } from "@/app/models/user";
import { NextResponse } from "next/server";

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

export async function GET(request, {params}){

    const {userId}=params;
    try {
        const user= await User.findById(userId);
        return NextResponse.json({
            user,
            status:true
        })
    } catch (error) {
        return NextResponse.json({
            message:"User not Found with this id",
            status:false
        })
    }
}

export async function PUT(request, {params}){
 
    const {userId}=params;

    try {
       
       const {name, password, about, profileURL}=await request.json();
       const user= await User.findById(userId);

       user.name=name;
       user.password=password;
       user.about=about;
       user.profileURL=profileURL;

       const updatedUser= await user.save();

       return NextResponse.json({
        message:"User Updated Sucessfully",
        status:true,
        updatedUser
       })



    } catch (error) {
        return NextResponse.json({
            message:"User not Updated",
            status:false
        })
    }
}