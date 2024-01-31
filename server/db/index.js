import mongoose from "mongoose";
import { DB_NAME } from '../utils/constants.js'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log(`\n MongoDB Connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Failed", error);
    }
}


export default connectDB;