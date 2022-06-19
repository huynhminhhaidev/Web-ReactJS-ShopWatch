import React, { Component } from 'react'
import {DataContext} from '../Context'
import  '../css/Cart.css'
import {Link} from 'react-router-dom'


export class Carts extends Component{
    static contextType = DataContext;
    render() {
        const {cart} = this.context;
        const {remove} = this.context;
        return (

            <div>
                <h1>Sản phẩm đã mua</h1>
                <>
                {
                    cart.map(item =>(
                        <div className="cart" key={item.id}>
                            <img src={item.src} alt=""/>
                            <div className="box-cart">
                                <div className="row1">
                                    <h2>{item.name}</h2>
                                    <span>x1</span>
                                    <span className="price">{item.price}</span>
                                </div>
                                <p>{item.content}</p>
                            </div>
                            <Link className="detele" onClick= {() => remove(item.id)}>X</Link>
                        </div>
                    ))
                }
            </>

            </div>
        )
    }
}

export default Carts;