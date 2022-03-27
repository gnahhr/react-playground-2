import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Product = ({data}) => {
  const [id, setId] = useState(data.id);

  const deleteProduct = async (e) => {
    e.preventDefault();
      var url = `http://localhost:3001/api/product/`;

      const params = {
        "productId": data.id
      }

      const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: params // body data type must match "Content-Type" header
    });

    console.log(await response.json());
  }
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.quantity}</td>
      <td>{data.expiration_date}</td>
      <td>{data.image_url}</td>
      <td>{data.created_at}</td>
      <td><Link to={`/update/${data.id}`} key={data.id}>Update</Link></td>
      <td><button onClick={deleteProduct}>Delete</button></td>
    </tr>
  )
}

export default Product