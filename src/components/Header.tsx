import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'
import menuItems from '../data/menuItems.json'
import Logo from './Logo'
export default function Header(){
    return(
        <header>
            <Logo/>
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
