import React, { Component } from "react";
import Menu from './svg/bars-solid.svg';
import Cart from './svg/bag.svg';
import Exit from './svg/times-solid.svg';
import {Link} from 'react-router-dom';
import './css/Header.css';
import {DataContext} from './Context'
import Logo from './svg/logo1.png'

class Header extends Component{
    static contextType = DataContext;

    state = {
        toggle:false
    }

    
    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
        console.log({toggle: !this.state.toggle})
        //thay đổi trạng thái cho biến toggle từ false -> true và ngược lại
    }
    render(){
        const {toggle} = this.state;
        const {cart} = this.context;
        return(
            <header className="header">
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <Link to="/home"><img src={Logo} alt=""/></Link>
                </div>
                <nav className = "menu-2">
                    <ul className={toggle ? "toggle": ""}>
                    {/* //Nếu biến true thì className là toggle còn false className là rỗng */}
                        <li><Link to="/home">Our store</Link></li>
                        <li><Link to="/products">Product</Link></li>
                        <li><Link to="/ourworld">Our world</Link></li>
                        <li className="exits" onClick={this.menuToggle}>
                        <img src={Exit} alt="" width="20"/>
                        </li>
                    </ul>
                </nav>
                <nav>
                <div className="cart-icon">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                        <img src={Cart} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
                
            </header>
        );
    }
 }






export default Header;