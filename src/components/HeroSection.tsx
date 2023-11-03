import React from 'react'
import heroText from '../data/heroText.json'

export default function HeroSection(){
    const {heading, description, description2}= heroText[0]
    return(

        <div className="hero-container">
            <h1>{heading}</h1>
            <p>{description}</p>
            <p>{description2}</p>
        </div>
    )
}
