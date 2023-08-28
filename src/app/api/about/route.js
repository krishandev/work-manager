import { connectDb } from "@/app/helper/db";
import { NextResponse } from "next/server";

connectDb();

export function GET(request){
    const users=[
        {
            name:"Krishan",
            Phone:"9999999",
            gender:"Male"
        },
        {
            name:"Bhavesh",
            Phone:"9999999",
            gender:"Male"
        },
        {
            name:"Sanju",
            Phone:"9999999",
            gender:"F"
        },
        {
            name:"Raj",
            Phone:"9999999",
            gender:"Male"
        }
    ];
    return NextResponse.json(users)
}

export function DELETE(request){
console.log("Delete Api Called");
return NextResponse.json({
    message:"Deleted ||",
    status:true
})

}

export function POST(request){
    const body= request.body;
    console.log(body);
    console.log(request.method);

    return NextResponse.json({
        message:"Posting User Data"
    })

}