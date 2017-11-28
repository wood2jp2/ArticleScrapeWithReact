import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header = props => {
    return (
      <div className='head'>
        <header
          className='wholeHeader'>
          <h1>New York Times Technology Article Scrubber</h1>
          <p>Search for and annotate articles of interest!</p>
            <p>
              {
                window.location.pathname === '/saved' ? <Link to='/'>Search and Results</Link>
                : <Link to='/saved'>Saved Articles</Link>
              }
          </p>
        </header>
      </div>
    )
}

export default Header
