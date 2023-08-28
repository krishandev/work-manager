import { Work } from "@/app/models/work";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    const {userId}=params;

    try {
        const works= await Work.find({userId:userId})

        return NextResponse.json(works)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Error in gettting Tasks",
            status:false
        })
    }
}