import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js'

// gets products
const getProducts = asyncHandler(async(req,res)=>{
    
    const products = await Product.find({})
    
    res.json(products)
})


//gets procts by id::
const getProductsById = asyncHandler(async(req,res)=>{
    
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error ('Resource Not Found')
    }
})


export {getProducts,getProductsById};