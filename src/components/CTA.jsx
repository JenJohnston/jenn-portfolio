import React from 'react'
import CV from '../assets/jenJohnston-resume-may2022.pdf'


export default function CTA() {
    

    return (
        <div className='cta'>
            <a href={CV} download className='btn-std'>Download CV</a>
            <a href="#contact" className='btn-primary'>Let's Talk</a>
        </div>
    )
}
