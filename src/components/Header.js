// src/components/Header.js
import React, { useEffect } from 'react'
import { Link } from 'gatsby';
import './custom-styles.css';

function Header() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    // Function to handle scrolling and fix/unfix the header
    const handleScroll = () => {
      const header = document.querySelector('.navbar');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('fixed-header');
        } else {
          header.classList.remove('fixed-header');
        }
      }
    };
      // Add scroll event listener on component mount
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
      // Remove scroll event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
return (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">UNC Human and Machine Intelligence Lab</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item ${currentPath === '/' ? 'active-tab' : ''}`}>
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className={`nav-item ${currentPath === '/People/' ? 'active-tab' : ''}`}>
            <Link className="nav-link" to="/People/">People</Link>
          </li>
          <li className="nav-item dropdown">
            <a href="/#" className={`nav-link ${currentPath.includes('/research/') ? 'active-tab' : ''}`}>
              Research
            </a>
            <div className="dropdown-menu">
              <Link
                className={`nav-link ${currentPath === '/research/pastResearch' ? 'active-tab' : ''}`}
                to="/research/pastResearch"
              >
                Past Projects
              </Link>
              <br></br>
              <Link
                className={`nav-link ${currentPath === '/research/currentResearch' ? 'active-tab' : ''}`}
                to="/research/currentResearch"
              >
                Current Projects
              </Link>
            </div>
          </li>
          <li className={`nav-item ${currentPath === '/Publications/' ? 'active-tab' : ''}`}>
            <Link className="nav-link" to="/Publications/">Publications</Link>
          </li>
          <li className={`nav-item ${currentPath === '/ToolsData/' ? 'active-tab' : ''}`}>
            <Link className="nav-link" to="/ToolsData/">ToolsData</Link>
          </li>
          <li className={`nav-item ${currentPath === '/News/' ? 'active-tab' : ''}`}>
            <Link className="nav-link" to="/News/">News</Link>
          </li>
          <li className={`nav-item ${currentPath === '/Sponsors/' ? 'active-tab' : ''}`}>
            <Link className="nav-link" to="/Sponsors/">Sponsors</Link>
          </li>
          <li className={`nav-item ${currentPath === '/Contact/' ? 'active-tab' : ''}`}>
            <Link className="nav-link" to="/Contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
}

export default Header;
