import React, { Component } from 'react';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
      <div>
        <header>
          <h1>Medium Technology Article Scrubber</h1>
          <p>Search for and annotate articles of interest!</p>
          <ul>
            <li>
              {
                window.location.pathname === '/saved' ? <Link to='/'>Search and Results</Link>
                : <Link to='/saved'>Saved Articles</Link>
              }
            </li>
          </ul>
        </header>
      </div>
    )
}

export default Header
