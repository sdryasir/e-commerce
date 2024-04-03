import express from 'express';
const app = express();
import router from './routes/routes.products.js';
const PORT = 8000;


app.use('/', router)


app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`);
})


