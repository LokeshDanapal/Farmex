const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questions = new Schema(
    {
        subject : {type : String},
        question : {type : String},
        description : {type : String},
        image : {
          data:Buffer,
          contentType : String
        }
    }
);

module.exports = mongoose.model('questions',questions);

