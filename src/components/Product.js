import React from 'react'
import {Link} from 'react-router-dom'
import moment from "moment";

const Product = ({data}) => {
  const deleteProduct = async (e) => {
    e.preventDefault();
      var url = `https://4000-talyho-simplecrud-ud2iopxthxg.ws-us38.gitpod.io/api/product/`;

      const params = {
        "productId": data.id
      }

      const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(params) // body data type must match "Content-Type" header
    });

    console.log(await response.json());
  }
  return (
    <tr>
      <td>{data.id}</td>
      <td><img src={"https://4000-talyho-simplecrud-ud2iopxthxg.ws-us38.gitpod.io/" + data.image_url} alt="image" /></td>
      <td>{data.name}</td>
      <td>{data.quantity}</td>
      <td>{moment(data.expiration_date).format('yyyy-MM-DD')}</td>
      <td>{moment(data.created_at).format('yyyy-MM-DD')}</td>
      <td><Link to={`/update/${data.id}`} key={data.id}>Update</Link></td>
      <td><button onClick={deleteProduct}>Delete</button></td>
    </tr>
  )
}

export default Product