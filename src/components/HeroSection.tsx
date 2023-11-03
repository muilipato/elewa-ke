import React from 'react'
import heroText from '../data/heroText.json'
import './styles/heroSection.css'

export default function HeroSection(){
    const {heading, description, description2}= heroText[0]
    return(

        <div className="hero-container">
            <p>{heading}</p>
            <h1>{description}</h1>
            <p>{description2}</p>
        </div>
    )
}
