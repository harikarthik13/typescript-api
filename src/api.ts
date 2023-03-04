interface Product
    {
        ProductId : number;
        ProductName: string;
        Price : number;
        Quantity: number;
    }
function getProduct():Promise <Product[]>{

return fetch ('/product.json')
.then(res=>res.json())
.then(res=>{return res as Product[]})
}

getProduct()
.then(pro=>{
    console.log(pro.map(p => 'ProductId:'+p.ProductId+ '\n' +'ProductName:' +p.ProductName + '\n' +'ProductPrice'+ p.Price+ '\n'+'Quantity' + p.Quantity + '\n'+ '\n').toString())
})