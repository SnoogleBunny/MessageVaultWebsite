import React from 'react';
import '../../App.css';

import LazyHero from 'react-lazy-hero';
import heroImage from '../../assets/faq-hero.png';

import './Products.css';
import ProductCards from '../shared-components/Card/ProductCards';
import Footer from '../shared-components/Footer/Footer';

export default function Products() {
    return (
        <div>
            <LazyHero color="black" imageSrc={heroImage} minHeight="15vh">
                <h1 style={{color: 'white'}}>Products</h1>
            </LazyHero>
            <ProductCards />
            <Footer />
        </div>
    )
}