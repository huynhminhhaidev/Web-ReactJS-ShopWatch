import React,{Component} from 'react'
import './css/Footer.css'
import FaceBook from './svg/fb.svg'
import Insta from './svg/insta.svg'
import Youtube from './svg/yt.svg'
import Twitter from './svg/twit.svg'
import {Link} from 'react-router-dom';

class Footer extends Component{
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>GET IN TOUCH</h6>
                        <p className="text-justify">support@orientwatch.freshdesk.com</p>
                        <p className="text-justify">(213) 989-2019</p>
                        <p className="text-justify">M-F, 9:00AM - 5:00PM PST</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                        <li><Link >All</Link></li>
                        <li><Link >Men</Link></li>
                        <li><Link >Women</Link></li>
                        <li><Link >Limited</Link></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Orient</h6>
                        <ul className="footer-links">
                        <li><Link to="/home" >Our story</Link></li>
                        <li><Link to="/products" >Products</Link></li>
                        <li><Link to="/ourworld" >Our world</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                    <Link>Scanfcode</Link>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                        <li><Link className="facebook"><img src={FaceBook} alt="" /></Link></li>
                        <li><Link className="twitter"><img src={Insta} alt="" /></Link></li>
                        <li><Link className="dribbble"><img src={Youtube} alt="" /></Link></li>
                        <li><Link className="linkedin"><img src={Twitter} alt="" /></Link></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;