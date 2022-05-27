import React, {useEffect} from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import AOS from 'aos';
import "aos/dist/aos.css";

import ME from '../assets/images/me-header.png'

export default function Header() {
    
    useEffect(() => {
        AOS.init({
          duration : 3000,
          disable: false,
          delay: 200,
        });
      }, []);

    return (
        <header id="home">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Jennifer Johnston</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me" data-aos="zoom-in">
                    <img src={ME} alt="Headshot of Jennifer Johnston" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div> 
        </header>
    )
}
