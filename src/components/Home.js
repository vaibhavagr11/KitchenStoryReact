import React,{useEffect} from 'react';
import {Jumbotron, Container, Button} from "reactstrap";
import {Link} from 'react-router-dom';
 
function Home() {
  useEffect(()=>{
    document.title="Home"
},[])
  return (

    <div>
        <Jumbotron className="text-center">
            <h1 className="display-3">Kitchen Story</h1>
            <p>
                This is developed by Vaibhav Agrawal as a part of Phase4 Project.
            </p>
            <Container>
                
                <Link type="button" tag='a' to="register">Start Using</Link>
            </Container>
        </Jumbotron>
    </div>
  );
}
 
export default Home;