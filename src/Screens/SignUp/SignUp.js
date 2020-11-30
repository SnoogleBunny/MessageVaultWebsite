import React, { useState } from 'react';
import '../../App.css';
import logo from '../../assets/11.png';
import './SignUp.css';
import Footer from '../shared-components/Footer/Footer';
import Button from '../shared-components/Button/Button';
import Axios from 'axios';

 const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleClick = async event => {
        try {
            await Axios.post('http://localhost:9000/api/auth/login', {
                email: email,
                password: password,
            })
            .then((res) => {
                if(res.data < 20) {
                    setError(res.data);
                }
                if(res.data.length() > 20) {
                    //const savedUser = res.data;
                }
            });
        }
        catch (err) {
            console.log(err)
        }
        event.preventDefault();
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-card-container">
                    <img src={logo} alt="Login / Register card logo" />
                    <h2>Login / Register</h2>
                    <form>
                        <p style={{color: 'red'}}>{error}</p>
                        <input type="email" name="email" placeholder="Your Email" onChange={e => setEmail(e.target.value)} />
                        <input type="password" name="password" placeholder="Password" minLength="8" onChange={e => setPassword(e.target.value)} />
                        <Button buttonSize="btn--large" buttonStyle="btn--primary" type="submit" onClick={handleClick}>Submit</Button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default SignUp;

