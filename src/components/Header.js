// src/components/Header.js
import React from 'react'
import { Link } from 'gatsby';

function Header() {
  return (
    <header>
      <nav>
         <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/people/">People</Link></li>
          <li className="nav-item dropdown">
            <a href="/#" className="nav-link">Research</a>
            <div className="dropdown-menu">
              <Link to="/research/past-projects">Past Projects</Link>
              <br></br>
              <Link to="/research/current-projects">Current Projects</Link>
            </div>
          </li>
          {/* <li><Link to="/research/">Research</Link></li> */}
          <li><Link to="/publications/">Publications</Link></li>
          <li><Link to="/tools-data/">Tools & Data</Link></li>
          <li><Link to="/news/">News</Link></li>
          <li><Link to="/sponsors/">Sponsors</Link></li>
          <li><Link to="/about/">About</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
