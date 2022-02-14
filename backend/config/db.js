const mongoose = require('mongoose')
const colors = require('colors');

const connectDB = async () => { 
     try {
          const conn = await mongoose.connect(process.env.MONGODB_URL)
          console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline)
     }catch(error){
          console.log(error);
          process.exit(1)
     }
}

module.exports = connectDB