import React, { useState ,useEffect } from 'react';
import Product from './Product';
import base_url from "./../api/bootapi";
import axios from 'axios';
import { toast } from 'react-toastify';
import Cart from "./Cart";
import {
    Card, 
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from 'reactstrap';
import {CartProvider} from "react-use-cart";
import { Toast } from 'bootstrap';
const Allproducts=(props)=>{

    useEffect(()=>{
        document.title="All products"
    },[])

    const getAllProductsFromServer=()=> {
        axios.get(`${base_url}/products`).then(
            //function to call server
            (response)=>{
                console.log(response.data);
                toast.success("Products have been loaded.")
                setProducts(response.data);
                setFilteredData(response.data);
            },
           (error)=>{
                console.log(error);
                toast.error("Something went wrong.")
            }
        )
    }
    //calling loading product function
    useEffect(()=>{
        getAllProductsFromServer();
    }, [])

    const[products,setProducts]=useState([ ])
    //const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(products);

    //const [cart,setCart]=useState([]);

    //const [cartItems,setCartItems]=useState([]);

    const [cart,setCart]=useState([]);

    

    const handleSearch = (event) =>{
        let value = event.target.value.toLowerCase();
        //let pro=data.productName.toLowerCase();
        let result = [];
        console.log(value);
        result = products.filter((data) => {
            return (data.productName.toLowerCase().search(value) != -1) || (data.productBrand.toLowerCase().search(value)!=-1)
            });
            setFilteredData(result);

    }

    const addToCart = (product) => {
        console.log(product.productBrand);
        //console.log(productBrand);
        console.log(product.productName);
        console.log(product.productSize);
        //console.log(productPrice);
        console.log(product.productPrice);

        setCart([...cart, product]);

        console.log(cart);

        
        
        
        
    }

    const removeFromCart=(product)=>{
        let hardcopy=[...cart];
        hardcopy = hardcopy.filter((cartItem) => cartItem.id !== product.id);
        setCart(hardcopy);
    }

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        total();
      }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
          totalVal=totalVal + parseInt(cart[i].productPrice);
        }
        setCartTotal(totalVal);
      };


      const checkoutCart=(data)=>{
          if(data.cartTotal!=0){
            console.log(data);
            toast.success("Payment SuccessFul")
            toast.success("Yor Order has been placed.")
            let clearCart=[...cart];
            //console.log(clearCart);
            let t=parseInt(clearCart.length)
            console.log(clearCart.length)
            for(let i=0;i<t;i++){
                //console.log(clearCart.pop)
                console.log(i);
                
                clearCart.pop();

            }

            console.log(clearCart);
            setCart(clearCart);
            
            

          }

          else{
              toast.error("Please Add a product to your Cart");
          }
          
      }

    

    return (
        <div className="conatiner">
            <div className="row">
                <div className="col-md-12">
                    <h1>All products</h1>
                    <div style={{ margin: '0 auto' }}>
                        <label>Search:</label>
                        <input type="text" onChange={(event) =>handleSearch(event)} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <p>List of products are as follows: </p>
                    {
                        products.length>0 ? filteredData.map((value,index)=>
                        <div className="block col-10">
                            <Card className="text-center">
                            <CardBody>
                                <CardTitle className="font-weight-bold">{value.productBrand}</CardTitle>
                                <CardSubtitle className="font-weight-bold"> {value.productName} </CardSubtitle>
                                <CardText>{value.productSize}grams</CardText>
                                <CardText>Rs.{value.productPrice}</CardText>

                                <div className="main-container">
                                    <Container className="text-center">
                    
                                        <input type="submit" value="add to cart" onClick={()=>addToCart(value)}/>
                    
                                    </Container>

                                </div>
                
                            </CardBody>
                            </Card>
                        </div>
                        
                        ) :"No products Available"
                    }
                    

                </div>
                <div className="col-md-4">
                    <h1> Cart</h1>
                    {
                        cart.length>0 ? cart.map((value,index)=>
                        <div>
                            <Card className="text-center">
                                <CardBody>
                                    <CardTitle className="font-weight-bold">{value.productBrand}</CardTitle>
                                    <CardSubtitle className="font-weight-bold"> {value.productName} </CardSubtitle>
                                    <CardText>{value.productSize}grams</CardText>
                                    <CardText>Rs.{value.productPrice}</CardText>
                                    <Container className="text-center">
                    
                                        <input type="submit" value="Remove" onClick={()=>removeFromCart(value)}/>
                    
                                    </Container>

                                </CardBody>
                            </Card>

                           

                        </div>

                        
                        
                        ): "No product in Cart Yet"
                    }

                    <div className="text-center">
                        Total: Rs.{cartTotal}
                    </div>
                    <div className="text-center">
                    <input type="submit" value="Checkout" onClick={()=> checkoutCart({cartTotal})}/>
                    </div>

                    
                    
                </div>
                
            </div>
        </div>
        
            
            
            
            

            

            


          
            
            
            
            

       
        
        

    );
}
export default Allproducts;