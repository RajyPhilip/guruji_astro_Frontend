
import './navbar.css';
import logo from '../Images/gurujiLogo.png';
import profile from '../Images/nav/nav_profile.png';
import customerCare from '../Images/nav/customer-care.png';
import refundImg from '../Images/nav/refund.png';
import lockImg from '../Images/nav/private.png';
import verified from '../Images/nav/vrified astrologer.png';
import filledCircle from '../Images/nav/nav_caraousel-eff.png';
import unfilledCircle from '../Images/nav/nav_caraousel_eff2.png';

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
                <img src={profile} alt='logo' />
            </div>

            <div className='nav-center-title-container'>
                <p>"Astrology for Clarity"</p>
                <span>Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra Theraphy</span>
            </div>
            <div>
                <button className='consult-btn'>Consult Now</button>
            </div>

            <div className='lower-nav' >
                <img src={customerCare} alt='customer-care' />
                <p>24 X 7 Customer Support</p>
            </div>
            <div className='refund' >
                <img src={refundImg} alt='customer-care' />
                <p>100% Refund if Unsatisfied</p>
            </div>
            <div className='refund privte' >
                <img src={lockImg} alt='customer-care' />
                <p>Private & Confidential</p>
            </div>
            <div className='refund verified' >
                <img src={verified} alt='customer-care' />
                <p>Verified &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Astrologer</p>
            </div>
            <div className='caraouse'>
                <img src={filledCircle} />
                <img src={unfilledCircle} />
                <img src={unfilledCircle} />
            </div>
        </div>
    );

}

export default Navbar;
