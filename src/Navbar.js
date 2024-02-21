import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const popup = document.getElementById('popup');
      if (popup && !popup.contains(event.target)) {
        closeDropdown();
      }
    };
  
    document.addEventListener('mousedown', handleDocumentClick);
  
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);


  return (
    <div className='headder-nav'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-2 header_left'>
                <Link to="/"><span><img src="https://ownyourgoalsdavina.com/cdn/shop/files/logo_davina_3_570x568_870x868_d871b358-e749-440d-9cda-d0f9ad18e452.png" alt="" style={{maxWidth: "240px"}} /></span></Link>
            </div>
            <nav className="col-md-10" id="AccessibleNav">
            <div className="mobile__nav">
<ul className="site-nav list--inline " id="SiteNav"> 
      <li className="Dashboard ">
        <a href="/" className="site-nav__link site-nav__link--main">
          <span className="site-nav__label">Dashboard</span>
        </a>
      </li> 
      <li className="Workouts ">
        <a href="/" className="site-nav__link site-nav__link--main">
          <span className="site-nav__label">Workouts</span>
        </a>
      </li>
      <li className="Recipes ">
        <a href="/" className="site-nav__link site-nav__link--main">
          <span className="site-nav__label">Recipes</span>
        </a>
      </li>
      <li className="Wellbeing ">
        <a href="/" className="site-nav__link site-nav__link--main">
          <span className="site-nav__label">Wellbeing</span>
        </a>
      </li>
      <li className="Menopause ">
        <a href="/" className="site-nav__link site-nav__link--main">
          <span className="site-nav__label">Menopause</span>
        </a>
      </li>
  <li className="desktop_view"><a href="/"><i className="fas fa-heart"></i></a></li> 
  <li className="guest-pass-btn desktop_view">

    <div className="btn-logo">
      
      <img src="//ownyourgoalsdavina.com/cdn/shop/files/Group_7428.png?v=1654836387" alt="logo"/>
      
    </div>
    <div className="guest-btn">
      <a href="/">My <span>guest</span> Passes!</a>
    </div>

  </li> 
  </ul>
  <div className='dropdown' onClick={toggleDropdown}>
    <div className='dropbtn icons btn-right showLeft desktop_view'>
      <button className='show_dropdown' id="show_dropdown">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="5" r="2" fill="black"></circle>
      <circle cx="12" cy="12" r="2" fill="black"></circle>
      <circle cx="12" cy="19" r="2" fill="black"></circle>
      </svg>
      </button>
    </div>
  </div>
  <div className={`popup modal ${isDropdownOpen ? 'show' : ''}`} id='popup'>
      <ul>
        <li>Your Account</li>
        <li>My Achievements</li>
        <li>Community</li>
        <li>Tracker</li>
        <Link to="/faq"><li onClick={toggleDropdown}>FAQ</li></Link>
        <li>Playlists</li>
        <li>Logout</li>
      </ul>
  </div>
  </div>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar