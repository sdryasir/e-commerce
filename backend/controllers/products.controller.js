import {Product} from '../model/products.model.js'

export const getAllProducts = async (request, response)=>{
    const products = await Product.find();
    response.json({
        products
    })
}

export const getProduct = (req, res, next)=>{
    
    next();
}
export const createNewProduct = async (req, res)=>{
    const product = req.body;
    const p = await Product.create(product);
    res.json({
        p
    })
}
export const updateProduct = (req, res)=>{
    res.send('Update product request')
}
export const deleteProduct = (req, res)=>{
    res.send('Delete product request')
}


//CRUD