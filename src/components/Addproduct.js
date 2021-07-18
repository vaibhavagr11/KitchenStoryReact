import React, { Fragment, useEffect , useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import base_url from './../api/bootapi';
import { toast } from 'react-toastify';

const Addproduct=()=>{

    
    useEffect(()=>{
        document.title="Add product"
    },[])

    const [product,setProduct]=useState({});

    //Form handler function
    const handleForm=(e)=>{
        console.log(product);
        Addproduct(product);
        e.preventDefault();
    }

    // Creating function to post data on server
    const Addproduct=(data)=>{
        console.log(data);
        axios.post(`${base_url}/products`,data).then(
            (response)=>{
                console.log(response.data);
                toast.success("Product Added Successfully")
            },(error)=>{
                console.log(error);
                toast.error("Product was not added...Please try again")
            }
        );
    }

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill product details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>Brand</label>
                    <Input
                        type='text'
                        placeholder='Enter Brand'
                        name='brand'
                        id='brand'
                        onChange={(e)=>{
                            setProduct({...product,productBrand: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Product Name</label>
                    <Input
                        type='text'
                        placeholder='Enter product Name'
                        //name='pName'
                        id='pName'
                        onChange={(e)=>{
                            setProduct({...product,productName: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Product Size</label>
                    <Input
                        type='number'
                        placeholder='Enter product Size in grams'
                        //name='pName'
                        id='pSize'
                        onChange={(e)=>{
                            setProduct({...product,productSize: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Product Price</label>
                    <Input
                        type='number'
                        placeholder='Enter product Price in Rupees'
                        //name='pName'
                        id='pPrice'
                        onChange={(e)=>{
                            setProduct({...product,productPrice: e.target.value})
                        }}
                    />
                </FormGroup>
                
                <Container className='text-center' >
                    <Button type="submit" color='success' outline> 
                        Add Product
                    </Button>
                    
                </Container>

            </Form>
            
            
        </Fragment>

    );
}

export default Addproduct;