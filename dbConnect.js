
const mongoose = require('mongoose')

mongoose.set('strictQuery', false); // or true, depending on your preference

const url = "mongodb+srv://vaijayanti34:22rINeIUP5YVa0pp@cluster0.mhbxwqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url);

const connection = mongoose.connection

connection.on('error',err=>console.log(err + "not connected"))
connection.on('connected',()=>console.log("monogo db connected"))