import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({data}) => {
  // const { id, name, quantity, expiration_date, image_url, created_at } = props.data;
  console.log(data)
  const link = "/update/" + data.id;

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.quantity}</td>
      <td>{data.expiration_date}</td>
      <td>{data.image_url}</td>
      <td>{data.created_at}</td>
      <td><Link to={"/update/" + data.id} >Update</Link></td>
      <td><Link to={"/delete/" + data.id} >Delete</Link></td>
    </tr>
  )
}

export default Product