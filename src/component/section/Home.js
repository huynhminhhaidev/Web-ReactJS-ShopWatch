import React,{Component} from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../svg/5.jpg';
import img2 from '../svg/4.jpg';
import img3 from '../svg/6.jpg';
import '../css/Home.css';
import ReactPlayer from 'react-player'
import video from '../svg/video.mp4'
import about from '../svg/about.jpg'

export class Home extends Component{
    render() {
        return (
            <div className = "home">
            <ReactPlayer className= "video"
                url = {video}
                playing = "true"
                loop = "true"
                width = "100vw"
                height = "80vh"
            />
            <div className = "about-us">
                <h1 className="h1-about-us">About Us</h1>
                <div className = "story-about-us">
                    <div className= "paragraph">
                    <p>Since 1950, Orient Watch has been dropping unique,</p>
                    <p>superior-quality timepieces. Today,</p>
                    <p>Orient continues to hone its craft by developing</p>
                    <p>developing unparalleled mechanical</p>
                    <p>movement, and redefine style by utilizing the</p>
                    <p>latest Japanese street fashion for the world to consume.</p>
                    </div>
                    <img  src= {about}/>
                </div>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <span className="home-h1">ORIENT STAR</span>
                    <span className="home-h3">Our story</span>
                    <p className="home-p">From the beginning, we have pursued a single mission: To offer high-quality, attainable timepieces with enduring style. Our heritage is rooted in craftsmanship, reliability, precision and beauty that stand the test of time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <span className="home-h3">At the Heart of Every Moving Moment</span>
                    <p className="home-p">Each passing second is an opportunity to make your life memorable and unique. An ORIENT watch marks every moment along your journey.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <span className="home-h3">Keeping Time the Mechanical Way</span>
                    <p className="home-p">We are proud to be at the forefront of mechanical watch production in Japan. With mechanical movements manufactured in-house, we can ensure the highest possible quality for our customers worldwide</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        )
    }
}

export default Home;