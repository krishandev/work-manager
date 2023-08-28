
import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request){
    console.log("middle ware executed");

    const authToken=request.cookies.get("authToken")?.value;

    if(request.nextUrl.pathname==="/api/login" || request.nextUrl.pathname==="/api/users"){
        return;
    }

    const loggedInUserNotAccessPath=request.nextUrl.pathname==="/login" || request.nextUrl.pathname==="/signup";

    if(loggedInUserNotAccessPath){
        if(authToken){
          return  NextResponse.redirect(new URL("/profile/user", request.url))
        }
    } else{
        if(!authToken){
        
            if(request.nextUrl.pathname.startsWith("/api")){
                return  NextResponse.json({
                    message:"Access denied !!",
                    success:false,
                }, {status:401})
            }

            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

    console.log(authToken);
}

export const config={
    matcher:[ "/add-task", "/login", "/signup", "/show-tasks", "/profile/:path*", "/api/:path*"]
}