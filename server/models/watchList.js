const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    Title : {type : String , required : true},
    Year : {type : String , required : true , unique : true},
    imdbID : {type : String , required : true},
    Type : {type : String , required : true},
    Poster : {type : String , required : true},
    created : {type : Date , default : Date.now}
});
 const WatchList = mongoose.model('watchlist',UserSchema );
 module.exports = WatchList;