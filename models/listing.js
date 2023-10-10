const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:"String",
        default:"https://storage.googleapis.com/pai-images/894cc1a2bb8340209229c01971018120.jpeg",
        set:(v) => v === "" ? "https://storage.googleapis.com/pai-images/894cc1a2bb8340209229c01971018120.jpeg" : v,
    },
    price:Number,
    location:String,
    country:String,
})

const Listing = mongoose.model("Listing",listingSchema)

module.exports = Listing;