import React from 'react';
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id = "footer">
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-brown'>Follow <span className='text-white'>Me</span></h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c'>
                    <li>
                        <a href = "/" className='text-white'>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a href = "/" className='text-white'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a href = "/" className='text-white'>
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href = "/" className='text-white'>
                            <FaPinterest />
                        </a>
                    </li>
                    <li>
                        <a href = "/" className='text-white'>
                            <FaBehance />
                        </a>
                    </li>
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Footer