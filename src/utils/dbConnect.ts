import mongoose from "mongoose"

export const connectDB = async() => {
    const dbUrl: string = process.env.MONGO_URL as string;

    try {
        if(dbUrl) {
            const connection = await mongoose.connect(dbUrl);
            console.log(`db is connected`)
        }
    } catch (error) {
        console.log(error)
    }
}