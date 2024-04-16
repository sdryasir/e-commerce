import mongoose from 'mongoose';
const { Schema } = mongoose;


const productSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    stock:Number
});

export const Product = mongoose.model('product', productSchema);

