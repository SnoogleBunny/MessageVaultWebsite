import React, { useState } from 'react';
import LazyHero from 'react-lazy-hero/lib/LazyHero';
import Faq from './Faq';
import faqHero from '../../assets/faq-hero.png'

export default function Questions() {
    const [faq, setFaq] = useState([
        {
            open: true,
            question: "What is The Message Vault?",
            answer: "Have you ever wondered if there was any form of communication you could have with your loved ones after you pass away? The Message Vault offers long term data storage for any messages you would like pass on to family members",
        },
        {
            open: false,
            question: "So how does it work?",
            answer: "The Message Vault has a one way encryption system set up so that when you upload photos, videos, audio, or pdf files. Your files are stored in a way where not a single person can read the encrypted data but you. These files have small passwords that are generated and stored on your account so that you're able to move those files to your loved ones on their accounts.",
        },
        {
            open: false,
            question: "How can I ensure my files are kept safe?",
            answer: "Files are account stored on a long term storage system used my medical institutions all around the world. These files are archived for long term storage and the physical device is taken out of the server room into a secure location.",
        },
        {
            open: false,
            question: "How do I get started?",
            answer: "Simple! To get started simply look to the top right of the screen and sign up for an account. From there you will be able to upload any files you want to The Message Vault.",
        },
        {
            open: false,
            question: "Who can I contact for more support?",
            answer: "To get more support please contact support@TheMessageVault.com",
        },
    ]);

    const toggleFaq = index => {
        setFaq(faq.map((faq, id) => {
            if(id === index) {
                faq.open = !faq.open;
            }
            else {
                faq.open = false;
            }
            return faq;
        }));
    }

    return (
        <div className="Questions">
            <LazyHero color="black" imageSrc={faqHero}>
                <h1 style={{color: 'white'}}>Frequently Asked Questions</h1>
            </LazyHero>
            {faq.map((faq, id) => (
                <div className="faqs">
                    <Faq faq={faq} index={id} toggleFaq={toggleFaq}/>
                </div>
            ))}
        </div>
    )
}