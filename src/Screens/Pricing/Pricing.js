import React from 'react';
import '../../App.css';

import './Pricing.css';
import LazyHero from 'react-lazy-hero';
import PricingCards from '../shared-components/Card/PricingCards';
import Footer from '../shared-components/Footer/Footer';

import faqHero from '../../assets/img-9.jpg';

export default function Pricing() {
    return (
        <div>
            <LazyHero color="black" imageSrc={faqHero} minHeight="15vh">
                <h1 style={{color: 'white'}}>Pricing / Plans</h1>
            </LazyHero>
            <PricingCards />
            <Footer />
        </div>
    );
}