import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function HeaderSocials() {
    

    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/jennifer-johnston-632911232/" tartet="_blank"><BsLinkedin className='svg__icon'/></a>
            <a href="https://github.com/JenJohnston" tartet="_blank"><BsGithub className='svg__icon'/></a>
            <a href="https://www.facebook.com/jennifer.johnston.96558061" tartet="_blank"><BsFacebook className='svg__icon'/></a>
        </div>
    )
}
