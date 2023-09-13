// src/components/Header.js
import React from 'react'
import { Link } from 'gatsby';

function Header() {
  return (
    <header>
      <nav>
         <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/People/">People</Link></li>
          <li className="nav-item dropdown">
            <a href="/#" className="nav-link">Research</a>
            <div className="dropdown-menu">
              <Link to="/research/past-projects">Past Projects</Link>
              <br></br>
              <Link to="/research/current-projects">Current Projects</Link>
            </div>
          </li>
          {/* <li><Link to="/research/">Research</Link></li> */}
          <li><Link to="/Publications/">Publications</Link></li>
          <li><Link to="/ToolsData/">Tools & Data</Link></li>
          <li><Link to="/News/">News</Link></li>
          <li><Link to="/Sponsors/">Sponsors</Link></li>
          <li><Link to="/About/">About</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
