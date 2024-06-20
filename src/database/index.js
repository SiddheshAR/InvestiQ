import mongoose from 'mongoose'



export default async function connectToDB(){
    const dbUrl = process.env.MONGODB_URI;
    // Connect to database
    // mongodb+srv://siddheshfr:<password>@cluster0.tlzbmkl.mongodb.net/
    try{
        await mongoose.connect(dbUrl);
        console.log("Connected to DB");
    }catch{
        console.log("Error Connecting DB")
    }
}