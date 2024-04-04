import { products } from "../model/products.js";

export const getAllProducts = (request, response)=>{
    response.json(products);
}

export const getProduct = (req, res, next)=>{
    
    next();
}
export const createNewProduct = (req, res)=>{
    res.send('Create product request')
}
export const updateProduct = (req, res)=>{
    res.send('Update product request')
}
export const deleteProduct = (req, res)=>{
    res.send('Delete product request')
}