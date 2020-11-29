import React, { Component } from 'react';

import LazyHero from 'react-lazy-hero';

import './Faq.css';
import arrow_down from '../../assets/arrow_down.svg';

export default function Faq({ faq, index, toggleFaq }) {
    return (
        <div   
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFaq(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    );
}