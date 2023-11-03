import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'
import menuItems from '../data/menuItems.json'
import companyLogo from '../assets/svgs/Logo_White_arvoyx.svg'
export default function Header(){
    return(
        <header>
            <div className="logo">
                <img src={companyLogo} alt="company logo" />
            </div>
            <nav>
                <ul className='menu'>
                    {menuItems.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
