var mongoose = require('mongoose');

// Product Schema
var JewelleriesSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
   
    price: {
        type: String,
        required: true
    },
    price_off:{
        type:String,
        required:true
    },
    discount: {
        type: String
        
    },
    seller:{
        type: String
    },
    image: {
        type: String
    },
    spec:{
        type:String
    }
    
});

var Valentine = module.exports = mongoose.model('Jewelleries', JewelleriesSchema);
