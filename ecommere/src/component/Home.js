import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
const url1 = "http://localhost:3001/viewproduct/";
const url2 = "http://localhost:3001/viewad/";
export default class Home extends Component {
  state={
    products:[],
    adver:[],
    errormessage:""
};
fetchProducts = () => {
    axios.get(url1)
    .then((res)=>{
        this.setState({
            products:res.data,
        });
    })
    .catch((err)=>{
        console.log("Error :",err);
    });
};
fetchAds = () => {
  axios.get(url2)
  .then((res)=>{
      this.setState({
          adver:res.data,
      });
  })
  .catch((err)=>{
      console.log("Error :",err);
  });
};
componentDidMount() {
    this.fetchProducts();
    this.fetchAds();
  }
 
  render() {
    return (
     <>
       {/*SlideShow*/}
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/JugJuggJeeyo/3000x1200_Hero-Tall_NP._CB632057087_.jpg"
style={{height:"400px"}}
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/GW/Aug/ATF/GW-PC-Bunk._CB630305411_.jpg"
style={{height:"400px"}}
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/July/GW/Unrec_30th/Final/V1/PC_Hero_3000x1200_V2._CB630300521_.jpg"
style={{height:"400px"}}
/>
<Carousel.Caption>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
 
<div  style={{padding: "20px"}}>
<div className="container p-3">

<div className="row">
{this.state.adver.map((ad) => (
<div className="col-md-3 col-sm-4 mb-1">
<div className="card col">
<div className="card-header">
<h5 className='card-title'>{ad.content}</h5></div>
<div className="card-body">
<center><img src={ad.imgPath} style={{"height" : "300px", "width" : "200px"}}/></center>
<a></a>

</div>
</div>
</div>
))}
</div>

</div>
</div>  
<div  style={{padding: "10px"}}>    
  <div className="card mb-3" >
  <img className="card-img-top" src="https://i.gadgets360cdn.com/large/prime-day-2022-free_1658308645060.png" style={{height:"400px"}} alt="Card image cap" />
</div>
</div>
<div class="card text-center bg-dark">
  <div class="card-header text-light">
   <h5>PRODUCTS</h5>
  </div>
  </div>
  <br/>

<div  style={{padding: "10px"}}>   
<div className="container p-3">
<div className="row">
{this.state.products.map((product) => (
<div className="col-md-3 col-sm-2 mb-3" style={{width:"280px"}}>

<div className="card col">
<div className="card-header">
<div className="card-body">
<center><img src={product.path} style={{"height" : "200px", "width" : "180px"}}/></center>
<br/>
<center><h5>{product.productName}</h5></center>
<span className="text-dark">{product.description} </span>
<br/>
<center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-1Yj026UVafiait5x7bZcoUTvKxvgsNe5S4wJHnND0uMD7Rxqd_cF7TlYxokRaGCtQ&usqp=CAU"
style={{height:"25px", width:"100px"}}></img></center>
<h5 style={{color:"#B12704"}}>₹{product.price} </h5><p><s>₹2,495 </s> (84% off)</p>

<span className='text-dark'>Get it by Friday, August 5
FREE Delivery on your first order in this category</span>

</div>
</div>
</div>

</div>

))}
</div>
</div>
</div>

     </>
    )
  }
}
