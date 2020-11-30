import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

import img1 from '../../../assets/14.png';

function ProductCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={img1} text="The bread and butter of our business, The Message Vault App allows people to create messages for one another and keep them for long term storage. Keep your messages cherished for a lifetime to come. Available on the iOS App Store and the Google Play Store" label="iOS / Android App" path="/products"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductCards;