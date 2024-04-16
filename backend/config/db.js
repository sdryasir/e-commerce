import mongoose from 'mongoose';

export const connectDB = async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
        .then(() => console.log('DB is Connected!'))
        .catch((err)=>{console.log(err)}
    );
}