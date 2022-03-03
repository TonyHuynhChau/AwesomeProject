const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thanhdat:thanhdat@mern-data.ukaa7.mongodb.net/MERN-Data?retryWrites=true&w=majority')

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

// mongoose
//     .connect(
//         "mongodb+srv://thanhdat:thanhdat@mern-data.ukaa7.mongodb.net/MERN-Data?retryWrites=true&w=majority"
//     ).then(()=>{
//         console.log("Connect to MongoDB")
//     }).catch((err) => {
//         console.log(err);
//     });
const port = process.env.PORT || 3000


app.get('/', (req,res) => res.send('Hello'))

app.listen(port)

console.log('server started on port ' + port)

