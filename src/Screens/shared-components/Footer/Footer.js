import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Have questions? Fill out the form and let us know what you're having trouble with.
                </p>
                <p className="footer-subscription-text">
                    Your information will not be saved.
                </p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="Your Email" />
                        <input className="footer-input" type="text" name="inquiry" placeholder="Your Inquiry" />
                        <Button buttonStyle='btn--outline'>Let me know</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/faq'>How it works</Link>
                        <Link to='/faq'>Testimonials</Link>
                        <Link to='/faq'>Careers</Link>
                        <Link to='/faq'>Investors</Link>
                        <Link to='/faq'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Media Inquiry</h2>
                        <Link to='/faq'>Ambassador Program</Link>
                        <Link to='/faq'>Sponsorships</Link>
                        <Link to='/faq'>Press & Media</Link>
                        <Link to='/faq'>Interesting Links</Link>
                        <Link to='/faq'>Blog</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>App Details</h2>
                        <Link to='/faq'>How it works</Link>
                        <Link to='/faq'>Pricing</Link>
                        <Link to='/faq'>Products</Link>
                        <Link to='/faq'>Privacy Policy</Link>
                        <Link to='/faq'>Encryption Method</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Information</h2>
                        <Link to='/'>Disabled</Link>
                        <Link to='/'>Disabled</Link>
                        <Link to='/'>Disabled</Link>
                        <Link to='/'>Disabled</Link>
                        <Link to='/'>Disabled</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            TheMessageVault <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className="website-rights">The Message Vault - 2020</small>
                    <div className="social-icons">
                        <Link to="Facebook.com" target="_blank" aria-label="Facebook" className="social-icon-link">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="linkedin.com" target="_blank" aria-label="Linkedin" className="social-icon-link">
                            <i className="fab fa-linkedin" />
                        </Link>
                        <Link to="Instagram.com" target="_blank" aria-label="Instagram" className="social-icon-link">
                            <i className="fab fa-instagram" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;