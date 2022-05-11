import React, { useState } from 'react'

import { BiHomeAlt } from 'react-icons/bi'
import { BiUserCircle } from 'react-icons/bi'
import { BiBook } from 'react-icons/bi'
import { RiSuitcaseLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'

export default function Nav() {
    
    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav className='nav__bar'>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt className='nav__icon'/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle className='nav__icon'/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook className='nav__icon'/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiSuitcaseLine className='nav__icon'/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail className='nav__icon'/></a>
        </nav>
    )
}
