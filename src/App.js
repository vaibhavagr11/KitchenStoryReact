import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import {Button, Container, Row,Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify";
import Home from './components/Home';
import Product from './components/Product';
import Allproducts from './components/Allproducts';
import Addproduct from './components/Addproduct';
import Header from './components/Header';
import Menus from './components/Menus'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ChangePassword from './components/ChangePassword';
import Cart from './components/Cart';

function App() {

  const btnHandle=()=> {
    toast.error("Done", {
      position:"bottom-center"
    });
  };

  
  
  return (
    <div>
      <Router>
        <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              
              <Route path="/" component={Home} exact />
              <Route path="/add-product" component={Addproduct} exact/>
              
              <Route path="/view-products" component={Allproducts} exact/>

              
              <Route path="/register" component={Register} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/changepassword" component={ChangePassword} exact/>
            </Col>
          </Row>
        </Container>
      </Router>
        
      
    </div>
    
  );
}

export default App;
