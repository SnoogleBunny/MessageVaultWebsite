import React from 'react';
import '../../App.css';
import HeroSection from '../shared-components/HeroSection/HeroSection';
import Cards from '../shared-components/Card/Cards';
import Footer from '../shared-components/Footer/Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home