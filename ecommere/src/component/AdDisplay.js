import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
const url2 = "http://localhost:3001/viewad/";
export default class AdDisplay extends Component {
    state={
        adver:[],
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
      componentDidMount(){
        this.fetchAds();
      }
  render() {
    return (
     <>
<div  style={{padding: "20px"}}>
<div className="container p-3">

<div className="row">
{this.state.adver.map((ad) => (
<div className="col-md-3 col-sm-4 mb-1">
<div className="card col">
<div className="card-header">
<h5 className='card-title'>{ad.content}</h5></div>
<div className="card-body">
<center><img src={ad.imgPath} style={{"height" : "300px", "width" : "250px"}}/></center>
<a></a>

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
