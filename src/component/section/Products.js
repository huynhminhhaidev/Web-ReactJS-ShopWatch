import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'

export class Products extends Component{

    static contextType = DataContext;
    
    constructor(){
        super();

        this.state={
            search:null,
            data:[]
        };
    }
    
    searchSpace=(event)=>{
        let keyword = event.target.value;
        this.setState({search:keyword})
    }

    filterGender = (gender) =>{
        const {products} = this.context;
        let gender1 = gender.target.value;
        const data = products.filter(products =>{
            return products.gender === gender1
        })
        this.setState({data:data})
        console.log({data})
    }

    filterCategory = (category) =>{
        const {products} = this.context;
        let category1 = category.target.value;
        const data = products.filter(products =>{
            return products.category === category1
        })
        this.setState({data:data})
        console.log({data})
    }


    allwatch = () =>{
        const {products} = this.context;
        this.setState({data: products})
    }


    render() {
        const {data} = this.state;
        const {products} = this.context;
        if(data.length === 0){
           this.setState({data: products})
        }
        const items = data.filter((products) => {

            if (this.state.search == null){
                return products
            }else if(products.name.toLowerCase().includes(this.state.search.toLowerCase())){
                return products
            }
        }).map(products => {
            return(
                <div className="card" key = {products.id}>            
                    <Link to={`/products/${products.id}`}>
                        <img src={products.src} alt=""/>
                        <div className="content">
                            <h3>
                            <Link to={`/products/${products.id}`}>{products.name}</Link>
                            </h3>
                            <p>{products.price}</p>
                            <p></p>
                            <button className="button" > <span>Quick View</span> </button>
                        </div>
                    </Link>
                </div>
            )
        })

        return(
            <div>
                <div className="box-filter">
                    
                    <input
                        name = "keyword"
                        type = "text"
                        placeholder = "Input product name..."
                        className = "search"
                        onChange = { (e)=>this.searchSpace(e)}
                    />
                    <label className = "radio">
                        All
                        <input
                            type = "radio"
                            className="filter-radio"
                            name= "gender"
                            defaultChecked
                            onChange={ () => this.allwatch()}
                        />
                    </label>
                    <label className="radio">
                        Men
                        <input
                            type = "radio"
                            className="filter-radio"
                            name = "gender"
                            value = "Nam"
                            onChange = { (e) => this.filterGender(e)}
                        />
                    </label>
                    <label className= "radio">
                        Women
                        <input
                            type = "radio"
                            className="filter-radio"
                            value = "Nu"
                            name= "gender"
                            onChange = { (e) => this.filterGender(e)}
                        />
                    </label>
                    <label className = "radio">
                        Limited
                        <input
                            type = "radio"
                            className="filter-radio"
                            name= "gender"
                            value = "limit"
                            onChange={ (e) => this.filterCategory(e)}
                        />
                    </label>
                </div>
                <div className="products">
                    {items}
                </div>
            </div>
        )
        
    }

}

export default Products;