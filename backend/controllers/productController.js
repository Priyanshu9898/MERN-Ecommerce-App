
const Product = require('../models/productModel');


// For Creating a Product- Admin
exports.createProduct = async (req , res , next) => {

    const {name , description , price, actual_price, rating , images , category , numOfReviews} = req.body;

    if(!name || !description || !price || !actual_price || !rating || !images || !category || !numOfReviews){
        return res.status(404).json({
            success: false,
            message: "Filled all the data Required Data for Product",
        });
    }
    
    try{
        const product = new Product({name, description, price, actual_price, rating, images, category, numOfReviews});

        const productRegister = await product.save();

        if(productRegister){
            return res.status(201).json({success: true, message: "Successfully created a new Product- Admin!"});
        }
        else{
            return res.status(404).json({success:false, message: "Failed to create a Product- Admin!"});
        }

    }
    catch(error){
        return res.status(404).json({
            success: false,
            error: error.message,
        });
    }

    
}


// Getting the list of all the products
exports.getProducts = async (req, res) => {

    const products = await Product.find();

    res.status(201).json({
        success: true,
        products
    });

}

// Update the Product Details- Admin
exports.updateProduct = async (req , res , next) => {


    let product = await Product.findById(req.params.id);

    // console.log(product);

    if(!product){
        return res.status(404).json({success:false, message:"Product not found"});
    }

    product = await Product.findByIdAndUpdate(req.params.id , req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })


    return res.status(200).json({success: true , message:"Product updated successfully", product} );
}


// Delete  the Product- Admin
exports.deleteProduct = async (req , res , next) => {

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({success:false, message:"Product not found"});
    }

    await product.remove();

    return res.status(200).json({success: true , message:"Product Deleted successfully", product} );
}


// Get the single Product Details
exports.productDetail = async (req, res, next) => {


    let productDetail = await Product.findById(req.params.id);

    if(!productDetail){
        return res.status(404).json({success:false, message:"Product not found"});
    }

    return res.status(200).json({success: true , message:"product successfully found", productDetail});
}