import React from 'react'
import Logo from './logos.webp'

const footer = () => {
  return (
    <div className='footer-end'>
    <div className='container'>
      <div className='logo'>
        <a href='/'>
            <img src={Logo} alt="logo" />
        </a>
      </div>
      <ul className='footer_nav urls'>
        <li className='site-footer__linklist-item'>Terms of use</li>
        <li className='site-footer__linklist-item'>Health Declaration</li>
        <li className='site-footer__linklist-item'>Privacy Policy</li>
        <li className='site-footer__linklist-item'>Cookie Policy</li>
        <li className='site-footer__linklist-item'>Ad Choices</li>
        <li className='site-footer__linklist-item'>Support</li>
      </ul>
      <div className='copyrighs_h'>
        <p>© 2024 Universal Studios - All Rights Reserved 
            <br />
            1 Central St. Giles, St. Giles High Street, London WC2H 8NU
        </p>
      </div>
    </div>
    </div>
  )
}

export default footer
