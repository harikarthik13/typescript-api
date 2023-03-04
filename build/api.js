"use strict";
function getProduct() {
    return fetch('/product.json')
        .then(res => res.json())
        .then(res => { return res; });
}
getProduct()
    .then(pro => {
    console.log(pro.map(p => 'ProductId:' + p.ProductId + '\n' + 'ProductName:' + p.ProductName + '\n' + 'ProductPrice' + p.Price + '\n' + 'Quantity' + p.Quantity + '\n' + '\n').toString());
});
