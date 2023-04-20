
import React from 'react';

import './navbar.css';
import logo from '../../Images/gurujiLogo.png';
import navImages from '../../Images/nav';

function Navbar() {

    return (
        <div className='navbar' >
            <div className='logo-container'>
                <img src={logo} alt='logo' />
                <p>Guruji</p>
            </div>
            <div className='navList'>
                <span>Home</span>
                <p>Call with Astrologer</p>
                <p>Live(Coming Soon)  </p>
            </div>
            <div className='profile-container'>
                <img src={navImages.profile} alt='logo' />
            </div>

            <div className='nav-center-title-container'>
                <p>"Astrology for Clarity"</p>
                <span>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy</span>
            </div>
            <div>
                <button className='consult-btn'>Consult Now</button>
            </div>

            <div className='lower-nav' >
                <img src={navImages.customerCare} alt='customer-care' />
                <p>24 X 7 Customer Support</p>
            </div>
            <div className='refund' >
                <img src={navImages.refundImg} alt='customer-care' />
                <p>100% Refund if Unsatisfied</p>
            </div>
            <div className='refund privte' >
                <img src={navImages.lockImg} alt='customer-care' />
                <p>Private & Confidential</p>
            </div>
            <div className='refund verified' >
                <img src={navImages.verified} alt='customer-care' />
                <p>Verified &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Astrologer</p>
            </div>
            <div className='caraouse'>
                <img src={navImages.filledCircle} />
                <img src={navImages.unfilledCircle} />
                <img src={navImages.unfilledCircle} />
            </div>
        </div>
    );

}

export default Navbar;
