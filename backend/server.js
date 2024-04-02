import express from 'express';
const app = express();


//localhost:8000/test
app.get('/test', (request, response)=>{
    const product = {
        title:'Test Product',
        description:'Some description',
        price:256
    }

    response.send(product);
})

app.get('/abc', (request, response)=>{

    response.send("Hello");
})


app.listen(8000, ()=>{
    console.log('Server is listening at port 8000');
})


