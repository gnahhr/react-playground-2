import React from 'react'
import { Link, useNavigate as navigate } from 'react-router-dom'
import useToken from '../../utils/useToken.js';
const Header = () => {

  const { token, setToken } = useToken();


  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <header>
        {token === "Success" ?
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/" onClick={logout}>Logout</Link></li>
          </ul>
        
        : 
        <h1>Sample App</h1>
        }
        
    </header>
  )
}

export default Header