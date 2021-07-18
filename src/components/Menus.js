import React from 'react';
import {Link} from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
const Menus=()=>{
    return(
    <ListGroup>
      <Link className="list-group-item list-group-item-action" tag='a' to="/" action>Home</Link>
      <Link className="list-group-item list-group-item-action" tag='a' to="/add-product" action>Add Product</Link>
      <Link className="list-group-item list-group-item-action" tag='a' to="view-products" action>View All products</Link>
      
      <Link className="list-group-item list-group-item-action" tag='a' to="register" action>Register</Link>
      <Link className="list-group-item list-group-item-action" tag='a' to="login" action>Login</Link>
      <Link className="list-group-item list-group-item-action" tag='a' to="changepassword" action>Change Password</Link>
    </ListGroup>


    );
}

export default Menus;