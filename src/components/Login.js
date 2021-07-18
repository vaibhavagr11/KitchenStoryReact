import React, { Fragment, useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import base_url from './../api/bootapi';
import { toast } from 'react-toastify';
const Login=()=>{
    useEffect(()=>{
        document.title="Login Form"
    },[])

    const [user1,setUser1]=useState({});

    const handleForm=(e)=>{
        console.log(user1);
        loginUser(user1);
        e.preventDefault();
    }
    // Creating function to  validate on server
    const loginUser=(data)=>{
        axios.post(`${base_url}/users/login`,data).then(
            (response)=>{
                console.log(response.data);
                toast.success("Logged in Successfully")
            },(error)=>{
                console.log(error);
                toast.error("Login Failed")
            }
        );
    }
    return(
        <Fragment>
            <h1 className="text-center my-3">Enter your login details!!</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>UserName</label>
                        <Input
                            type='text'
                            placeholder='Enter your username'
                            name='username'
                            id='username'
                            onChange={(e)=>{
                                setUser1({...user1,username: e.target.value})
                            }}
                        />
                </FormGroup>
                <FormGroup>
                    <label>Password</label>
                        <Input
                            type='password'
                            placeholder='Enter your password'
                            name='password'
                            id='password'
                            onChange={(e)=>{
                                setUser1({...user1,password: e.target.value})
                            }}
                        />
                </FormGroup>
                <Container className='text-center' >
                    <Button type ="submit" color='success' outline> 
                        Login
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default Login;