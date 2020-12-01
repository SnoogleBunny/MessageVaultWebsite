import React from 'react';

import heroVideo from '../../../assets/video-4.mp4';
import Button from '../Button/Button';

import './HeroSection.css';
import '../../../App.css';

function HeroSection () {
    return (
        <div className='hero-container'>
            <video src={heroVideo} autoPlay loop muted />
            <h1>CHERISH THE LITTLE THINGS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button href="/sign-up" className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                <Button href="/youtube" className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default HeroSection;