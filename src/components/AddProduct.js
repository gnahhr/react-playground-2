import React, { useState } from 'react'

const AddProduct = () => {
  const [ id, setID ] = useState("");
  const [ name, setName ] = useState("");
  const [ quantity, setQuantity ] = useState("");
  const [ expDate, setExpDate ] = useState("");
  const [ imgURL, setImgURL ] = useState("");

  const addSubmit = async (e) => {
    e.preventDefault();
      var url = 'http://localhost:3001/api/product';
      
      const data = new FormData();

      data.append("name", name);
      data.append("quantity", quantity);
      data.append("expiration_date", expDate);
      data.append("file", imgURL);

      // const data = {
      //   "name": name,
      //   "quantity": quantity,
      //   "expiration_date": expDate,
      //   "file": imgURL
      // }
      
      console.log(data);

      const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          body: data // body data type must match "Content-Type" header
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
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

const onInputChange = (e)=>{
    const value = e.target.value;
    const name = e.target.name;

    setInputValue[name](value);
}

  return (
    <div>
      {/* <form action="addSubmit" method="post" id="addForm"> */}
        <label htmlFor="id">ID:</label> <br />
        <input type="text" name="id" id="id" value={id} onChange={(e) => onInputChange(e)}/> <br />
        <label htmlFor="name">Name:</label> <br />
        <input type="text" name="name" id="name" value={name} onChange={(e) => onInputChange(e)}/><br />
        <label htmlFor="quantity">Quantity:</label> <br />
        <input type="number" name="quantity" id="qty" value={quantity} onChange={(e) => onInputChange(e)}/><br />
        <label htmlFor="expiration_date">Expiration Date:</label> <br />
        <input type="date" name="expDate" id="expdate" value={expDate} onChange={(e) => onInputChange(e)}/><br />
        <label htmlFor="image">Image URL:</label> <br />
        <input type="file" name="imgURL" id="imgURL" onChange={(e) => setFile(e)}/>
        <input type="submit" value="Submit It Jonathan" onClick={addSubmit}/><br />
      {/* </form> */}
    </div>
  )
}

export default AddProduct