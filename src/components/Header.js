// src/components/Header.js
import React from 'react'
import { Link } from 'gatsby';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">UNC Human and Machine Intelligence Lab</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li><Link className="nav-link" to="/People/">People</Link></li>
            <li className="nav-item dropdown">
               <a href="/#" className="nav-link">Research</a>
               <div className="dropdown-menu">
                 <Link className="nav-link" to="/research/past-projects">Past Projects</Link>
                 <br></br>
                 <Link className="nav-link" to="/research/current-projects">Current Projects</Link>
               </div>
             </li>
             <li><Link className="nav-link" to="/Publications/">Publications</Link></li>
             <li><Link className="nav-link" to="/ToolsData/">Tools & Data</Link></li>
             <li><Link className="nav-link" to="/News/">News</Link></li>
             <li><Link className="nav-link" to="/Sponsors/">Sponsors</Link></li>
             <li><Link className="nav-link" to="/About/">About</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
