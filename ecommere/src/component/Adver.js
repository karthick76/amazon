import React, { Component } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
const url1 = "http://localhost:3001/adverise";
const ur2 = "http://localhost:3001/deletead/";
const url ="http://localhost:3001/viewad/";
export default class Adver extends Component {
    constructor(props) {
        super(props);
        this.state = {
          form: {
            content:"",
            imgPath:"",
          },
          formErrorMessage: {
            content:"",
            imgPath:"",
          },
          formValid: {
            content:false,
            imgPath:false,
          },
          adver:[],
          errorMessage: "",
          successMessage: "",
        };
      }
      fetchAds = () => {
        Axios.get(url)
        .then((res)=>{
            this.setState({
                adver:res.data,
            });
        })
        .catch((err)=>{
            console.log("Error :",err);
        });
    };
      submitBooking = (event) => {
        const newForm = {
            ...this.state.form,
          };
        Axios
        .post(url1,newForm)
        .then((res)=>{
            alert("Added Successfully");
            window.location.reload(false);
        })
        .catch((error) => {
            alert("Failed");
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.submitBooking();
      };
    
      handleChange = (event) => {
           const name = event.target.name;
            const value = event.target.value;
            const newState={
                form: {
                  ...this.state.form,
                  [name]: value,
                },
              };
              this.setState(newState);
              this.validateField(name, value)
      };
      validateField = (fieldName, value) => {
        const { formErrorMessage, formValid } = this.state;
            switch (fieldName) {
                case "content":
                if (value === "") {
                  formErrorMessage.content = "Please enter a Content";
                  formValid.content = false;
                }
                else {
                  formErrorMessage.content  = "";
                  formValid.content = true;
                }
                break;

                    case "imgPath":
                    if (value === "") {
                      formErrorMessage.imgPath = "Please enter a Image Address";
                      formValid.imgPath = false;
                    }
                    else if(!value.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i)){
                        formErrorMessage.imgPath="Please Enter Only Vaild Image Address";
                        formValid.imgPath=false;
                      } 
                      else {
                      formErrorMessage.imgPath = "";
                      formValid.imgPath= true;
                    }
                    break;
                    
              default:
                break;
            }
      };
      componentDidMount() {
        this.fetchAds();
      }
      deleteAds = (id) => {
        Axios.delete(`http://localhost:3001/deletead/${id}`);
        alert("Deleted Successfully");
        window.location.reload(false);
    };
  render() {
    const { adver } = this.state;
    const rows = adver.map((ads) => (
      <tr key={ads.id}>
        <td>{ads.id}</td>
        <td>{ads.content}</td>
        <center><td><img src={ads.imgPath} style={{height:"40px" ,width:"50px"}}/></td></center>
        <td>
          <button 
            type="submit"
            onClick={()=>this.deleteAds(ads.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
   
    return (
        <>
        <form className="container" onSubmit={this.handleSubmit}>
        <div className="CreateBooking">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <br />
              <div className="card">
                <div className="card-header bg-dark">
                <center><img src="https://freebeacon.com/wp-content/uploads/2014/11/Amazon-Logo-.jpg" style={{height:"50px"}} /></center>
                  <center><h4 className='text-light'>ADD ADVERSIMENT</h4></center>
                </div>
                <div className="card-body">
                    <div class="form-group">
                    
                    <label className="font-weight-bold">Content:</label>
                    <input type="text" className="form-control" 
                    value={this.state.form.content}
                    name="content"  onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.content}</p>
                   
                     <label className="font-weight-bold">AD Image Address:</label>
                     <input type="text" className="form-control" value={this.state.form.imgPath} 
                     name="imgPath" 
                     onChange={this.handleChange}></input>
                    <p className="text-danger">{this.state.formErrorMessage.imgPath}</p>

                 <center> <button type="submit" 
                  disabled={
                    !(this.state.formValid.content && this.state.formValid.imgPath)
                  } className="btn btn-dark" >Add Adversiment</button></center>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </form>
              <div className="container mb-5 mt-3">
                        <table className="table table-dark table-striped table-bordered" style={{width:"100%"}} >
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Content</th>
                              <center><th>Image</th></center>
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
)
}
}
