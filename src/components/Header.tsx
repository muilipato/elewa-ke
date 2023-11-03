import React from 'react'
import './styles/header.css'
import companyLogo from '../assets/svgs/Logo_White_arvoyx.svg'
export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={companyLogo} alt="company logo" /></div>
        </header>
    )
}
