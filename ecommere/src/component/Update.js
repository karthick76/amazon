import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';
const url1 ="http://localhost:3001/viewproduct/";

export default class Update extends Component {
    constructor(props){
        super(props);
    this.state={
        products:[],
        errormessage:"",
        searchTerm: ""
    };
    this.handleChange = this.handleChange.bind(this);
}
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value 
        })
      }
    fetchProduct = () => {
        Axios.get(url1)
        .then((res)=>{
            this.setState({
                products:res.data,
            });
        })
        .catch((err)=>{
            console.log("Error :",err);
        });
    };
    searchuser=()=>{
        Axios.get(`http://localhost:3001/viewproduct/?fname=${this.state.setRecord.record}`)
        .then(response=>{
            this.setState({
                setRecord:response.data,
            })
        });
    }
    componentDidMount() {
        this.fetchProduct();
      }
  render() {
    const { products, searchTerm } = this.state;
    const rows =  products
    .filter((products) =>
      products.productId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((pro,key) => {
        return (
      <tr key={pro.id}>
        <td>{pro.id}</td>
        <td>{pro.productId}</td>
        <td>{pro.productName}</td>
        <td>{pro.brand}</td>
        <td>{pro.item}</td>
        <td>{pro.price}</td>
        <td>
        <button 
            type="submit"
            onClick={() =>this.props.history.push(`updateproduct/${pro.id}`)}
            className="btn btn-primary"
          >
            Update
          </button>
        </td>
      </tr>
        );
        })
    return (
        <>
        <br/>
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
      <input style={{width:"500px"}} type="text" className="form-control" value={this.searchTerm} name="searchTerm" onChange={this.handleChange} placeholder="Type here to Search"/>
      <button type="button" onClick={this.searchuser} className="btn btn-primary">Search</button>
      </form>
                      <div className="container mb-5 mt-3">
                        <table className="table table-dark table-striped table-bordered" style={{width:"100%"}} >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Product ID</th>
                              <th>Product Name</th>
                              <th>Brand</th>
                              <th>Item</th>
                              <th>Price</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>{rows}</tbody>
                         
                        </table>
                       <Link to="/home"> <button 
                  type="submit" style={{width:"250px"}}
                  className="btn btn-warning text-light"
                >
                  Go Back
                </button></Link>
                      </div>
           
                    
        
           </>
    );
  }
}
