export const getAllProducts = (request, response)=>{
    const product = [
        {
            title:'Test Product 1',
            description:'Some description',
            price:256
        },
        {
            title:'Test Product 2',
            description:'Some description',
            price:256
        },
        {
            title:'Test Product 3',
            description:'Some description',
            price:256
        }
    ]

    response.send(product);
}

export const getProduct = (req, res)=>{
    res.send('Single product request')
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