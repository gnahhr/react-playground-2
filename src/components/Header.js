import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/add">Add</Link></li>
        </ul>
    </header>
  )
}

export default Header