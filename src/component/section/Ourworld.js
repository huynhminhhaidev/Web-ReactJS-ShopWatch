import React,{Component} from 'react'
import model from '../svg/model.jpg'
import model2 from '../svg/model2.jpg'
import model3 from '../svg/model3.jpg'
import "../css/Ourworld.css"
import ins from '../svg/about.jpg'

import ins1 from '../svg/ins-1.jpg'
import ins2 from '../svg/ins-2.jpg'
import ins3 from '../svg/ins-3.jpg'
import ins4 from '../svg/ins-4.jpg'
import ins5 from '../svg/ins-5.jpg'
import ins6 from '../svg/ins-6.jpg'
import ins7 from '../svg/ins-7.jpg'
import ins8 from '../svg/ins-8.jpg'

export class Ourworld extends Component{
render() {
    return (
        <div>
            <div className= "img-world">
                <img src={model2} />
                <div className = "group-2"> 
                    <img src={model} />
                    <img src={model3} />
                </div>
                <div className="text">
                    <p>Wellcome to</p>
                    <p>Our World</p>
                </div>
            </div>
            <div className="para">
                <span>Exploring every detail of innovation, Orient’s world is</span>
                <span>made of groundbreaking Craftsmanship, Partnerships</span>
                <span>and News & Events.</span>
            </div>
            <div className = "our-ins">
                <p className="heading-ins">Shop Our Instagram</p>
                <p className = "content-ins">get the fresh look of our instagram</p>
                <div className="img-ins">
                    <div className="img">
                        <img src={ins1} />
                    </div>
                    <div className="img">
                        <img src={ins2} />
                    </div>
                    <div className="img">
                        <img src={ins3} />
                    </div>
                    <div className="img">
                        <img src={ins4} />
                    </div>
                    <div className="img">
                        <img src={ins5} />
                    </div>
                    <div className="img">
                        <img src={ins6} />
                    </div>
                    <div className="img">
                        <img src={ins7} />
                    </div>
                    <div className="img">
                        <img src={ins8} />
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default Ourworld;