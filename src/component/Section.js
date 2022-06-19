import React from "react";
import Products from './section/Products'
import Details from './section/Details'
import Ourworld from './section/Ourworld'
import {Route,Switch} from 'react-router-dom'
import Home from './section/Home'
import Carts from './section/Carts'

const Section = () => {
    return(
            <section>
                <Route path="/products" component={Products} exact />
                <Route path="/products/:id" component={Details} />
                <Route path="/" component={Home} exact/>
                <Route path="/home" component={Home}/>
                <Route path="/cart" component={Carts}/>
                <Route path="/Ourworld" component={Ourworld}/>
            </section>
    );
};

export default Section;