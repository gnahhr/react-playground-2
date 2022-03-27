import React, { useState, useEffect } from 'react'
import Product from './Product.js';

const Main = () => {
  const [products, setProducts] = useState();

  useEffect(async () => {
    var url = 'http://localhost:3001/api/products';
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify() // body data type must match "Content-Type" header
        });
        var some = await response.json();
        setProducts(some["data"]);

  }, [])

  const display = () => {
    console.log(products);
  }

  return (
    <main>
      <button onClick={display}>Ge</button>
      {!products ?
          <h1>No Products</h1>
      : 
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Expiration Date</th>
            <th>Image URL</th>
            <th>Created At</th>
            <th colspan={2}>ACTIONS</th>
          </tr>
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </table>
      }
    </main>
  )
}

export default Main