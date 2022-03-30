import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const AddProduct = () => {
  const history = useNavigate();
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expDate, setExpDate] = useState("");
  const [imgURL, setImgURL] = useState("");

  const addSubmit = async (e) => {
    e.preventDefault();
    var url = process.env.REACT_APP_API_URL + '/api/product';
    console.log('url', url)

    const data = new FormData();
    await data.append("name", name);
    await data.append("quantity", quantity);
    await data.append("expirationDate", expDate);
    await data.append("image", imgURL);

    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data // body data type must match "Content-Type" header
    });
    // console.log('response', await response.json())
    const responseJson = await response.json()
    console.log('responseJson', responseJson)
    if (responseJson.statusCode === 200) {
      history("/");
    }
    // console.log(await response.json());
  }

  const setInputValue = {
    id: setID,
    name: setName,
    quantity: setQuantity,
    expDate: setExpDate,
    imgURL: setImgURL,
  }

  const setFile = (e) => {
    setImgURL(e.target.files[0]);
    console.log(imgURL);
  }

  const onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputValue[name](value);
  }

  return (
    <div className="addProduct">
      <label htmlFor="name">Name:</label> <br />
      <input type="text" name="name" id="name" value={name} onChange={(e) => onInputChange(e)} /><br />
      <label htmlFor="quantity">Quantity:</label> <br />
      <input type="number" name="quantity" id="qty" value={quantity} onChange={(e) => onInputChange(e)} /><br />
      <label htmlFor="expiration_date">Expiration Date:</label> <br />
      <input type="date" name="expDate" id="expdate" value={expDate} onChange={(e) => onInputChange(e)} /><br />
      <label htmlFor="image">Image URL:</label> <br />
      <input type="file" name="imgURL" id="imgURL" onChange={(e) => setFile(e)} /> <br />
      <input type="submit" value="Add Product" onClick={addSubmit} /><br />
    </div>
  )
}

export default AddProduct