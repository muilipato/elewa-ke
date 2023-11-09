import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import BelowHeroSection from "./BelowHeroSection";
import Footer from "./Footer";
import './styles/home.css'

function Home(){
    return(
      <>
        <div className="header-hero-content">
          <div className="background-image"></div>
          <Header/>
          <HeroSection/>
        </div>
        <BelowHeroSection/>
        <Footer/>
      </>
    )
}

export default Home;
