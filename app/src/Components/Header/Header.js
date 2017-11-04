import React, { Component } from 'react';
import {Router, Link} from "react-router-dom";

const Header = () => {
    return (
      <div>
        <header>
          <h1>Header Component</h1>
          <ul>
            <li><Link to='/main'>Home</Link></li>
            <li><Link to='/search'>Search</Link></li>
            <li><Link to='/saved'>Saved</Link></li>
          </ul>
        </header>
      </div>
    )
}

export default Header
