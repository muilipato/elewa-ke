import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import './styles/home.css'

function Home(){
    return(
        <div className="header-hero-content">
          <div className="background-image"></div>
          <Header/>
          <HeroSection/>
        </div>
    )
}

export default Home;
