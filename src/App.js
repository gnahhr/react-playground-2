import './App.css'
import Header from './components/Header/Header.js'
import Dashboard from './components/DashboardPage/DashboardPage.js'
import Footer from './components/Footer/Footer.js'
import Login from './components/LoginPage/Login.js'
import AddProduct from './components/AddProductPage/AddProductPage.js'
import UpdateProduct from './components/UpdateProductPage/UpdateProduct.js'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import useToken from './utils/useToken.js'

function App() {

  const { token, setToken } = useToken();

  return (  
    <Router>
      <div className="App">
        <Header />
        <main>
          {token === "Success" ?
            <Routes>
              <Route path="/" exact element={<Dashboard />}/>
              <Route path="add" element={<AddProduct />}/>
              <Route path="update/:updateId" element={<UpdateProduct />}/>
            </Routes>
            :
            <Login setToken={setToken}/>
          }
        </main>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
