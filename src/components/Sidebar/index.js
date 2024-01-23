import { NavLink,Link } from 'react-router-dom';
import './index.scss';
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import LogoN from '../../assets/images/logo-n.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

import React from 'react'

 const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoN} alt="Logo" />
        </Link>
        <nav >
           <NavLink to="/" exact="true" activeclassname='true'><FontAwesomeIcon icon={faHome} color="#4d4d4e" /></NavLink> 
        
           <NavLink to="/about" exact="true" activeclassname='true' className='about-link '><FontAwesomeIcon icon={faUser} color="#4d4d4e" /></NavLink> 
        
           <NavLink to="/contact" exact="true" activeclassname='true' className='contact-link'><FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /></NavLink> 
        </nav>
        <ul>
            <li>
                <a   href="https://www.linkedin.com/in/neema-n-32a61822b/" target="_blank"  rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'   className="anchor-icon"/>
                </a>
            </li>
            <li>
                <a href='https://github.com/neemaseruhar' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'   className="anchor-icon"/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar;