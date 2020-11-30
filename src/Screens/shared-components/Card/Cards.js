import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

import img1 from '../../../assets/img-1.jpg';
import img2 from '../../../assets/img-2.jpg';
import img3 from '../../../assets/img-3.jpg';
import img4 from '../../../assets/img-4.jpg';
import img5 from '../../../assets/img-5.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these nifty features</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={img1} text="You can't beat free. Our free plan offers a multitude of services for most day to day users" label="Affordable Services" path="/services"/>
                        <CardItem src={img2} text="Keep cherished memories cherishable by storing them in our ultra secure one way encrypted storage" label="Secure data keeping" path="/faq"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={img3} text="Helpful support is hard to come by, The Message Vault will always be available for any support you need" label="Unrivaled Support" path="/faq"/>
                        <CardItem src={img4} text="You can't beat free. Our free plan offers a multitude of services for most day to day users" label="Affordable Services" path="/pricing"/>
                        <CardItem src={img5} text="Find more interesing articles on how to keep your messages safe so that your loved ones can read them in the future" label="Information" path="/pricing"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards