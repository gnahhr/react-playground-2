import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import moment from "moment";

const UpdateProduct = () => {
  let params = useParams();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expDate, setExpDate] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [def, setDef] = useState(true);
  const [localImg, setLocImg] = useState("");

  const setAll = async (data) => {
    setName(data.name);
    setQuantity(data.quantity);
    setExpDate(moment(data.expiration_date).format('yyyy-MM-DD'));

    let response = await fetch(process.env.REACT_APP_API_URL + `/${data.image_url}`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
    });

    let imgData = await response.blob();
    let metadata = {
      type: 'image/jpeg'
    };

    setImgURL(new File([imgData], data.image_url.split("/")[1], metadata));
  }


  // useEffect(async () => {

  // }, [])

  useEffect(async () => {
    var url = process.env.REACT_APP_API_URL + `/api/product/${params.updateId}`;
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
    setAll(some["data"][0]);
  }, [])


  const updateSubmit = async (e) => {
    e.preventDefault();
    var url = process.env.REACT_APP_API_URL + `/api/product/${params.updateId}`;

    const data = new FormData();
    await data.append("name", name);
    await data.append("quantity", quantity);
    await data.append("expirationDate", expDate);
    await data.append("image", imgURL);

    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: data // body data type must match "Content-Type" header
    });

    console.log(await response.json());
  }

  const setInputValue = {
    name: setName,
    quantity: setQuantity,
    expDate: setExpDate,
    imgURL: setImgURL,
  }

  const setFile = (e) => {
    setImgURL(e.target.files[0]);
    setDef(false);

    var imageElement = document.getElementById("formPic");
    const reader = new FileReader();
    reader.onloadend = () => {
      imageElement.src = reader.result;
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  const onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputValue[name](value);
  }

  return (
    <div className="addProduct">
      {def ? <img src={process.env.REACT_APP_API_URL + `/images/${imgURL.name ? imgURL.name : ""}`} alt="" id="formPic" /> :
        <img src={""} alt="" id="formPic" />}
      <br />
      <label htmlFor="name">Name:</label> <br />
      <input type="text" name="name" id="name" value={name} onChange={(e) => onInputChange(e)} /><br />
      <label htmlFor="quantity">Quantity:</label> <br />
      <input type="number" name="quantity" id="qty" value={quantity} onChange={(e) => onInputChange(e)} /><br />
      <label htmlFor="expiration_date">Expiration Date:</label> <br />
      <input type="date" name="expDate" id="expdate" value={expDate} onChange={(e) => onInputChange(e)} /><br />
      <label htmlFor="image">Image URL:</label> <br />
      <input type="file" name="imgURL" id="imgURL" onChange={(e) => setFile(e)} /> <br />
      <input type="submit" value="Update It Jonathan" onClick={updateSubmit} /><br />
    </div>
  )
}

export default UpdateProduct