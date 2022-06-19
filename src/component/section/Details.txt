import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/Details.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Details extends Component {
    static contextType = DataContext;
    state = {
        products: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            // gán cho res là các phần tử trong mảng
            // This.context là các biến state và các handing event. This cái nào thì lấy cái đó
            const data = res.filter(item =>{
                return item.id === this.props.match.params.id
                            // gán biến item.id = id của sản phẩm 
            })
            this.setState({products: data})
            // Thiết lập biến state của product là data. biến data là thông tin sản phẩm đc click
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    

    render() {
        const {products} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    products.map(item =>(
                        <div className="details" key={item.id}>
                            <div className="left-img">
                                <img src={item.src} alt=""/>
                            </div>
                            <div className="box">
                                <div className="row2">
                                    <h2>{item.name}</h2>
                                    <span>{item.price}</span>
                                    <p>{item.decription}</p>
                                </div>
                                {/* <p>{item.content}</p> */}
                                <Link to={`/products/${products.id}`} className="cart" onClick={() => addCart(item.id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details