import React from 'react'

import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'

export default function Footer() {
    

    return (
        <footer>
            <a href="#home" className='footer__logo'>- JENNIFER JOHNSTON -</a>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/jennifer.johnston.96558061" tartet="_blank"><FiFacebook className='footer__icon'/></a>
                <a href="https://www.instagram.com/0jen.johnston0/?hl=en" tartet="_blank"><BsInstagram className='footer__icon'/></a>
                <a href="https://twitter.com/yeg_jennifer" tartet="_blank"><FiTwitter className='footer__icon'/></a>
                <a href="https://www.linkedin.com/in/jennifer-johnston-632911232/" tartet="_blank"><AiOutlineLinkedin className='footer__icon'/></a>
                <a href="https://github.com/JenJohnston" tartet="_blank"><FiGithub className='footer__icon'/></a>
            </div>

            <div className="footer__copy">
                <small>&copy; 2022 Jennifer Johnston. All Rights Reserved</small>
            </div>
        </footer>
    )
}
