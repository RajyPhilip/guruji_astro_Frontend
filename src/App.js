import Carousel from 'react-material-ui-carousel';

import './App.css';
import Card from './component/Card';
import Review from './component/Review';
import Navbar from './component/navbar';
import Footer from './component/footer';

import image from './Images/card/image1.png' ;
import image2 from './Images/card/image2.png' ;
import image3 from './Images/card/image3.png' ;
import image4 from './Images/card/image4.png' ;
import image5 from './Images/card/image5.png' ;
import image6 from './Images/card/image6.png' ;
import image7 from './Images/card/image7.png' ;
import image8 from './Images/card/image8.png' ;
import image9 from './Images/card/image9.png' ;
import star from './Images/star.png' ;
import tornPage from './Images/tornPage.png';
import leftSolutionImg from './Images/manyproblem/leftImage.png';
import rightSolutionImg from './Images/manyproblem/leftImage.png';
import rotateImg from './Images/manyproblem/rotate_img.png';
import middleSun from './Images/manyproblem/sun.png' ;
import VideoCarousel from './component/VideoCaraousel';
import sun from './Images/Videocaraousel/sun.png';
import banner from './Images/Videocaraousel/banner.png'
import darkDot from './Images/Videocaraousel/darkdot.png';
import lightDot from './Images/Videocaraousel/lightdot.png';

function App() {

let cards  = [
  { image: image},
  { image: image2},
  { image:image3 },
  { image:image4},
  { image: image5},
  { image: image6},
  { image: image7},
  { image: image8},
  { image: image9},
]

  return (
    <div className="App">
      <Navbar />
      <div className='Video-caraousel-main'>
        <div className='sun-container'>
          <img src={sun} />
        </div>
          <div className='review-head-cont'>
            <img src={star} />
            <p>User Testimonial </p>
            <img src={star} />
          </div>
        <VideoCarousel />
        <div className='banner-container'>
            <img src={banner} />
          </div>
          <div className='dot-container'>
            <img src={darkDot} />
            <img src={lightDot} />
            <img src={lightDot} />
            <img src={lightDot} />
            <img src={lightDot} />

          </div>
      </div>
      <div className='all-cards-container'>
        <div className='premium-astro-cont'>
          <img src={star} />
          <p>Premium Astrologers</p>
          <img src={star} />
        </div>
        <div className='card-container'>
        {cards.map((card, index) => (
          <Card key={index} image={card.image}  />
        ))}
        </div>
      </div>
      <img className='torn' src={tornPage} />
      <div className='manyProblem-container'>
        <div className='premium-astro-cont'>
            <img src={star} />
            <p>Many Problems one Solution </p>
            <img src={star} />
        </div>
          <div className='mpos-content'>
            <div className='left-div'>
                <img src={leftSolutionImg} />
            </div>
            <div className='middle-div'>
                <img className='rotate' src={rotateImg} />
                <img src={middleSun} />
            </div>
            <div className='right-div'>
                <img src={rightSolutionImg} />
            </div>
          </div>
      </div>
      <Review />
      <Footer />
    </div>
  );
}

export default App;
