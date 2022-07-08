const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true , "Product Name  is Required" ],
        trim: true,
    },

    description : {
        type : String,
        required: [true , "Product Description is Required" ],
        trim: true,

    },

    price :{
        type : Number,
        required: [true , "Product Price is Required" ],
        maxLength : [8 , "Product Price can not exceed 8 numbers"],
 
    },
    actual_price :{
        type : Number,
        required: [true , "Actual Product Price is Required" ],
        maxLength : [8 , "Actual Product Price can not exceed 8 numbers"],

    },

    rating: {
        type: Number,
        default : 0,
    },

    images: [
        {
            public_id:{
                type: String,
                required: true,
                trim: true,
            },
    
            url: {
                type: String,
                required: true,
                trim: true,
            }
        }

    ],

    category: {
        type: String,
        required: [true , "Category is Required" ],
        trim: true,
    },

    stock: {
        type: Number,
        required: [true , "Product Stock is Required" ],
        maxLength: [4 , "Stock can not exceed 4 character"],
        default: 10,
    },

    numOfReviews: [
        {
            name : {
                type: String,
                required : true,
            },
            rating: {
                type: Number,
                required: true,
            },

            review: {
                type: String,
                required: true,
            },
        }
            
    ],
    createdAt: {
        type: Date,
        default: Date.now(),
    }

});


const Product = mongoose.model("Product", productSchema)

module.exports = Product;