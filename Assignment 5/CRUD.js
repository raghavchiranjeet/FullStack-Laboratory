const http = require('http')
const mongoose = require('mongoose')
const express = require('express')
const bodyparser = require('body-parser')

var app = express()
app.use(bodyparser.json())

mongoose.connect('mongodb://localhost/FullStack-LAB', {useNewUrlParser : true})
    .then( (client) => {
        
        console.log("Connected")
    })
    .catch( (err) => console.log(err))

const studentSchema = new mongoose.Schema({
    ID : Number,
    Name: String,
    Dept: String,
    phone: String
});
    
const studentClass = mongoose.model('student', studentSchema);

const s = new studentClass({
    ID : 1,
    Name: "XYZ",
    Dept: "CSE",
    phone: "944292315"

const result = s.save();
console.log('Document created', result)