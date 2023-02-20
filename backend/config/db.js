

import mongoose from "mongoose"

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, /*{
            
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true 

            The useCreateIndex option has been deprecated for a while and removed as of the Mongoose 6 release. 
            UseNewUrlParser , useUnifiedTopology , useFindAndModify , and useCreateIndex are no longer supported options. 
            Mongoose 6 always behaves as if useNewUrlParser , useUnifiedTopology , and useCreateIndex are true , 
            and useFindAndModify is false

            Source: https://www.mongodb.com/community/forums/t/option-usecreateindex-is-not-supported/123048/3

            In other words, no need to do this code block
        }*/)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB