import React from 'react';
import '../../App.css';
import HeroSection from '../shared-components/HeroSection/HeroSection';
import Cards from '../shared-components/Card/Cards'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
}

export default Home