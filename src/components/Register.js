import React, { Fragment, useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import base_url from './../api/bootapi';
import { toast } from 'react-toastify';
const Register=()=>{
    useEffect(()=>{
        document.title="Sign up form"
    },[])

    const [user,setUser]=useState({});

    //Form handler function
    const handleForm=(e)=>{
        console.log(user);
        registerUser(user);
        e.preventDefault();
    }

    // Creating function to post data on server
    const registerUser=(data)=>{
        axios.post(`${base_url}/users`,data).then(
            (response)=>{
                console.log(response.data);
                toast.success("Registered Successfully")
            },(error)=>{
                console.log(error);
                toast.error("Registration failed")
            }
        );
    }

    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Your details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>First Name</label>
                    <Input
                        type='text'
                        placeholder='Enter First Name'
                        name='fname'
                        id='fname'
                        onChange={(e)=>{
                            setUser({...user,firstName: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Last Name</label>
                    <Input
                        type='text'
                        placeholder='Enter Last Name'
                        name='lname'
                        id='lname'
                        onChange={(e)=>{
                            setUser({...user,lastName: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Email</label>
                    <Input
                        type='text'
                        placeholder='Enter email'
                        name='email'
                        id='email'
                        onChange={(e)=>{
                            setUser({...user,email: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Username</label>
                    <Input
                        type='text'
                        placeholder='Enter Username'
                        name='username'
                        id='username'
                        onChange={(e)=>{
                            setUser({...user,username: e.target.value})
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                    <Input
                        type='password'
                        placeholder='Enter Password'
                        name='password'
                        id='password'
                        onChange={(e)=>{
                            setUser({...user,password: e.target.value})
                        }}
                    />
                </FormGroup>
                <Container className='text-center' >
                    <Button type="submit" color='success' outline> 
                        Register
                    </Button>
                    
                </Container>
            </Form>
        </Fragment>
    );
}

export default Register;