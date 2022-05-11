import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import ME from '../assets/images/me.png'

export default function Header() {
    

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Jennifer Johnston</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="Headshot of Jennifer Johnston" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div> 
        </header>
    )
}
