import express from 'express';
const app = express();
import router from './routes/routes.products.js';
import {connectDB} from './config/db.js';
import bodyParser from 'body-parser';

const PORT = 8000;

connectDB()

app.use(bodyParser.json());
app.use('/', router);


app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`);
})


