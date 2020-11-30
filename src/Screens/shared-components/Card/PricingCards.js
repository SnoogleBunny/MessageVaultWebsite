import React from 'react';
import './Cards.css';
import CardItem from '../CardItem/CardItem';

import img3 from '../../../assets/img-3.jpg';
import img4 from '../../../assets/img-4.jpg';
import img5 from '../../../assets/img-5.jpg';

function PricingCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items__tall">
                        <CardItem src={img3} text=" 5 GB of Storage " label="Free" path="/faq"/>
                        <CardItem src={img4} text=" 50 GB of Storage " label="Bronze" path="/pricing"/>
                        <CardItem src={img5} text=" 100 GB of Storage " label="Silver" path="/pricing"/>
                        <CardItem src={img5} text=" 500 GB of Storage " label="Gold" path="/pricing"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PricingCards;