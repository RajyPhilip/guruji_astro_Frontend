
import React from 'react';

import './footer.css';
import logo from '../Images/gurujiLogo.png';
import socialBack from '../Images/footer/socials/logobg.png';
import facebookLogo from '../Images/footer/socials/facebookLogo.png';
import instagramOuter from '../Images/footer/socials/instaouter.png';
import instagramInner from '../Images/footer/socials/instainner.png';
import twitterLogo from '../Images/footer/socials/twitterlogo.png';
import youtubeLogo from '../Images/footer/socials/ytlogored.png';
import youtubePlay from '../Images/footer/socials/ytlogo play.png';
import trustedBack from '../Images/footer/trustedSeals/background.png';
import razorpay from '../Images/footer/trustedSeals/razorpay.png' ;
import paytmLogo from '../Images/footer/trustedSeals/paytm.png';
import stripeLogo from '../Images/footer/trustedSeals/stripe.png';

function Footer() {

    return (
        <div className='footer-cont' >
            <div className='footer-logo-cont'>
                <img src={logo} alt='' />
                <p>Guruji</p>
            </div>
            <div className='footer-cont-about'>
                <p>About Guruji s2 to 3 lines what guruji do and how it works About Guruji s2 to 3 lines what guruji do and how it works</p>
            </div>
            <div className='social-cont'>
                <div>
                    <img src={socialBack} alt='socialbg' />
                    <img src={facebookLogo} alt='facebooke' />
                </div>
                <div>
                    <img src={socialBack} alt='socialbg' />
                    <img src={instagramOuter} alt='instagrm' />
                    <img src={instagramInner} alt='instagram' />
                </div>
                <div>
                    <img src={socialBack} alt='socialbg' />
                    <img src={twitterLogo} alt='twitter' />
                </div>
                <div>
                    <img src={socialBack} alt='socialbg' />
                    <img src={youtubeLogo} alt='youtube' />
                    <img src={youtubePlay} alt='youtube' />
                </div>
            </div>
            <div className='footer-trusted-cont'>
                <p>Trusted & Seals</p>
            </div>
            <div className='trusted-logo-cont'>
                <div>
                    <img src={trustedBack} alt='background' />
                    <img src={razorpay} alt='razorpayLogo' />
                </div>
                <div>
                    <img src={trustedBack} alt='background' />
                    <img src={paytmLogo} alt='paytmLogo' />
                </div>
            </div>
            <div className='trusted-stripe'>
                <img src={trustedBack} alt='background' />
                <img src={stripeLogo} alt='paytmLogo' />
            </div>

            <div className='footer-middle-container'>
                <div>
                    <div>
                        <h3>Company</h3>
                    </div>
                    <div>
                        <p>Home</p>
                        <p>Privacy Policy</p>
                        <p>T & C</p>
                        <p>Varied Payment</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Support</h3>
                    </div>
                    <div>
                        <p>Home</p>
                        <p>Privacy Policy</p>
                        <p>T & C</p>
                        <p>Varied Payment</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Collaborate</h3>
                    </div>
                    <div>
                        <p>Clever Tap</p>
                        <p>Exotel </p>
                        <p>Facebook</p>
                        <p> Quora</p>
                        <p> Google</p>
                        <p> Youtube</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Important Link</h3>
                    </div>
                    <div>
                        <p>Tarot Reader</p>
                        <p>Vedic Astrology</p>
                        <p>Palmistry</p>
                        <p>Gemology</p>
                        <p>Vastu</p>
                        <p>Numerology</p>
                    </div>
                </div>
            </div>
            <div className='form-container'>
            <form>
                <input placeholder='Your Name' />
                <input placeholder='Mail ID' />
                <textarea placeholder='Write Query' />
                <button className='submit-btn'>Submit</button>
            </form>
            </div>
        </div>
    );

}

export default Footer;
