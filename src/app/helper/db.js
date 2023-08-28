import mongoose from "mongoose"
import { User } from "../models/user";
export const connectDb=async()=>{
    try {
       const {connection} =await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName:"work-manager"
        });
        console.log("Db Connected...");

        // testing and creating new user
        // const uuser=new User({
        //     name:"test Name",
        //     email:"test@gmail.com",
        //     password:"123456",
        //     about:"This is testing"
        // });

        // await uuser.save();
        // console.log("User Is created")


        
        console.log("Connected with host", connection.host);
        
    } catch (error) {
        console.log("Failed to Connect with database");
        console.log(error);
    }
}