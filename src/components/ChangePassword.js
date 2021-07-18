import React, { Fragment, useEffect,useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import axios from 'axios';
import base_url from './../api/bootapi';
import { toast } from 'react-toastify';
const ChangePassword=()=>{
    useEffect(()=>{
        document.title="Change Password"
    },[])

    const [user2,setUser2]=useState({});

    const handleForm=(e)=>{
        console.log(user2);
        changePassword(user2);
        e.preventDefault();
    }
    // Creating function to  changepassword on server
    const changePassword=(data)=>{
        axios.post(`${base_url}/users/changePassword`,data).then(
            (response)=>{
                console.log(response.data);
                toast.success("Password changed successfully")
            },(error)=>{
                console.log(error);
                toast.error("Password cannot be changed!!")
            }
        );
    }
    return(
        <Fragment>
            <h1 className="text-center my-3">Change your password!!</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>User Name</label>
                    <Input
                            type='text'
                            placeholder='Enter your username'
                            name='username'
                            id='username'
                            onChange={(e)=>{
                                setUser2({...user2,username: e.target.value})
                            }}
                        />
                </FormGroup>
                <FormGroup>
                    <label>Current Password</label>
                    <Input
                            type='password'
                            placeholder='Enter your old password'
                            name='oldpassword'
                            id='oldpassword'
                            onChange={(e)=>{
                                setUser2({...user2,oldpassword: e.target.value})
                            }}
                        />
                </FormGroup>
                <FormGroup>
                    <label>New Password</label>
                    <Input
                            type='password'
                            placeholder='Enter your new password'
                            name='newpassword'
                            id='newpassword'
                            onChange={(e)=>{
                                setUser2({...user2,newpassword: e.target.value})
                            }}
                        />
                </FormGroup>
                <Container className='text-center' >
                    <Button type="submit" color='success' outline> 
                        Change
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default ChangePassword;