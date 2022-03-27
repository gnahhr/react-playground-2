import './App.css'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Login from './components/Login.js'
import AddProduct from './components/AddProduct.js'
import UpdateProduct from './components/UpdateProduct.js'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  const [token, setToken] = useState(true);

  return (  
    <Router>
      <div className="App">
        <Header />
        
          {token ?
            <Routes>
              <Route path="/" exact element={<Main />}/>
              <Route path="/add" element={<AddProduct />}/>
              <Route path="/update" element={<UpdateProduct />}/>
            </Routes>
            :
            <Login props={setToken}/>
          }
        
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
