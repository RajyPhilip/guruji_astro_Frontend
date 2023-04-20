import React from 'react';

import './card.css';
import sideHue from '../Images/card/side hue.png' ;
import contactGroup from '../Images/card/contactGroup.png' ;
import downHue from '../Images/card/downhue.png' ;
import statusbg from '../Images/card/statusBG.png' ;
import online from '../Images/card/online.png';




function Card(props) {
    let image = props.image ;


    return (
        <div className='caraousel'>
            <div className='exp-on'>
                <p >10+ Years</p>
                <img className='uphue' src={downHue} alt='downhue' />
                <img className='upsidehue' src={sideHue} alt='sidehue' />
                <div className='status-cont'>
                        <img src={statusbg} />
                        <img className='online' src={online} />
                </div>    
                <span > online</span>
            </div> 
            <div className='detail-box'>
                <p className='title'>Astrologer Ramraj</p>
                <div >
                    <p > Specialities</p>
                    <span> Love,Business,Life</span>
                </div>
                <div>
                    <p > Skills</p>
                    <span > Vedic Astrology,Kundali,</span>
                </div>
            </div>    
            <div className='price-box'>
                <p>Price</p>
                <p className='price'>₹10 <span>/min</span> </p>
            </div>           
            <div className='card'>
                <img className='sidehue' src={sideHue} alt='sidehue' />
                <img className='downhue' src={downHue} alt='downhue' />
                <img className='displayPic' src={image} alt='hue' />
                <img className='contact' src={contactGroup} alt='hue' />
            </div>
            <p className='hidden'>i</p>
        </div>
    );

}

export default Card;
