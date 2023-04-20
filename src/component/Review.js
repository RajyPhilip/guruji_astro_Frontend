
import './review.css';

import star from '../Images/star.png';
import reviewDarkStar from '../Images/Review/reeviewdarkstar.png';
import reviewLightStar from '../Images/Review/reviewlightstar.png' ;
import arrow from '../Images/Review/Down Arrow.png';
function Review() {
    return (
        <div className='review-container'>
            <div className='review-head-cont'>
                <img src={star} />
                <p>User Review </p>
                <img src={star} />
            </div>
            <div className='review-white-box'>
                <div className='review-star-cont'>
                    <img src={reviewDarkStar} />
                    <img src={reviewDarkStar} />
                    <img src={reviewDarkStar} />
                    <img src={reviewDarkStar} />
                    <img src={reviewLightStar} />
                </div>
                    <p>Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with </p>
                    <div className='both-arr-container'>
                        <div className='arrow-cont'>
                            <img src={arrow} />
                        </div>
                        <div className='arrow-cont right'>
                            <img src={arrow} />
                        </div>
                    </div>
            </div>
        </div>
    );

}

export default Review;
