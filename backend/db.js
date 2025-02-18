const mongoose = require('mongoose');
const schedule = require('node-schedule');
require('dotenv').config();

const mongoUrl ="mongodb://zambresayali6:Sayali@2003@undefined/?replicaSet=atlas-q7ditz-shard-0&ssl=true&authSource=admin";
// console.log(mongoUrl)

const connectToMongo = () => {
    mongoose.connect(mongoUrl, () => {
        console.log("Connected to Mongo successfully......");
    })
}

module.exports = connectToMongo;