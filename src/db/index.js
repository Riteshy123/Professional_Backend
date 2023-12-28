import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb+srv://riteshkumaryadav61054:gefsuCD444pnasXh@cluster0.ikigu5u.mongodb.net/?retryWrites=true&w=majority" )
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB