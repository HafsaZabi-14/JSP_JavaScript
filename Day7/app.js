async function fetchProducts()
{
    let res = await fetch('https://fakestoreapi.com/products');
    let products = await res.json();

    let table = document.getElementById('product_list');
    for(let i=0; i<products.length; i++)
    {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${products[i].id}</td>
            <td>${products[i].title}</td>
            <td><img src = '${products[i].image}' width='100px' height='100px'></td>
            <td>${products[i].price}</td>
            <td>${products[i].description}</td>
        `
        table.appendChild(tr);
    }
};
fetchProducts();