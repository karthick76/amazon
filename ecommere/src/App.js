import './App.css';
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Route, Switch ,Link} from 'react-router-dom';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import DeleteProduct from './component/DeleteProduct';
import Update from './component/Update';
import UpdateProduct from './component/UpdateProduct';
import Adver from './component/Adver';
import AdDisplay from './component/AdDisplay';
class App extends Component{
  render(){
    return(
      <>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
      
      <ul className="navbar-nav">
        <li class="nav-item avatar">
        <a class="nav-link p-0" href="#">
          <img src="https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png"
            alt="avatar image" height="35" />
        </a>
      </li>
        <a  className="navbar-brand" to="/">Amazon</a>
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="/addproduct">Add Product</Link>
      </li>

      <li className="nav-item active">
      <Link className="nav-link" to="/update">Update Product</Link>
      </li>

      <li className="nav-item active">
      <Link className="nav-link" to="/deleteproduct">Delete Product</Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="/adver">Adversiment</Link>
      </li>

      <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span  className="navbar-toggler-icon"></span>
      </button>
      
        </ul>
        <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item avatar">
        <a class="nav-link p-0" href="#">
        <li className="nav-item">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-HKndsB70C6zo4kOkJtVPLzbLaOA5ljeYw&usqp=CAU"
            alt="avatar image" height="35" />Register/Login
             </li>    
        </a>
      </li>
    </ul>
      </div>
     
    </nav>
  {/*Navbar Ended */}
  <Switch>
  <Route path="/addproduct" component={AddProduct} />
  <Route path="/deleteproduct" component={DeleteProduct} />
  <Route path="/update" component={Update} />
  <Route path="/updateproduct/:id" component={UpdateProduct} />
  <Route path="/adver" component={Adver} />
  <Route path="/addisplay" component={AdDisplay} />
  <Route path="/" component={Home} />
  </Switch>
      </>
    )
  }
}
export default App;
