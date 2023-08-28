
import { Work } from "@/app/models/work";
import { NextResponse } from "next/server";



export async function DELETE(request, {params}){

    const {workId}=params;
    try {
         await Work.deleteOne({_id:workId});
         return NextResponse({
            message:"Work deleted Successfully",
            status:true
         })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to Delete Work",
            status:false
        })
    }

}

export async function GET(request, {params}){
  
    const {workId}=params;

    try {
        const work= await Work.findById(workId);

        return NextResponse.json(work);

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to find work",
            status:false
        })
        
    }
}

export async function PUT(request, {params}){

    const {workId}=params;


    try {
        const {title, description, status}=await request.json();
        let work= await Work.findById(workId);

        work.title=title;
        work.description=description;
        work.status=status;

        const updatedWork= await work.save();

        return NextResponse.json({
            message:"Work updated Sucessfully",
            status:true,
            updatedWork
        })

    } catch (error) {
        console.log(error)
        return NextResponse({
            message:"Failed to update Work",
            status:false
        })
        
    }
}

