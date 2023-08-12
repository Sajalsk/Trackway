import React, { useState,useContext, useEffect} from "react";
import "../style/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {  } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import loginIMg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../Utilis/config";

const Register = () => {

  const [credential, setCredential] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  var [count, setCount] = useState(0);
  var [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setCount = 0
  }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('count', count);
  // }, [setCount]);

  const handleClick = async (e) => {
    e.preventDefault();
  

    try {
     console.log(credential);
      const res = await fetch(`${BASE_URL}/auth/register`,{
        
        method:'post',
        headers:{
          'content-type':'application/json'
        },

        body:JSON.stringify(credential)
      })
  
      const result = await res.json()
      console.log(result);
     
      if(!res.ok) alert(result.message)

      dispatch({type:'REGISTER_SUCCESS'})
      alert("User Created Successfully");
       navigate('/login')
    }
    catch (err) {
      console.log("in catch");
      alert(err.message)
    }
  };

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

 const verify=()=>{
   
   window.open ('https://www.signzy.com/fintech-apis/aadhaar-verification-api/');
    // setCount=1;
    // alert("Verfied")
  
  setCount  = (count + 1);
  console.log(setCount);
  setDisabled(false); 
 // console.log(setDisabled);
  }

  const statecheck=()=>{
   //  console.log(setDisabled);
    console.log(setCount);
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginIMg} alt="" />
              </div>

              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>

                <FormGroup>
                    <input
                      type="username"
                      placeholder="Username"
                      required
                      id="username"
                      onChange={handleChange}

                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <Button  onClick={verify}  style={{fontSize:"20px", marginLeft:"25px",
                  backgroundColor: "" , height:"50px" , borderRadius:"6px"}}
                  className="btn btn-danger">
                  ID Verification
                  </Button>
                 
                  <Button disabled={disabled} style={{fontSize:"25px",marginTop:"20px" , marginLeft:"43px",
                  backgroundColor: "" }}
                  className="btn btn-success"
                  type="submit">
                  Register
                  </Button>

                  <button onClick={statecheck}>State</button>

                  {/* <p  style={{fontSize:"17px",}}>
                  Already have an Account? <Link to="/login" style={{fontSize:"25px"}}>
                    <p style={{fontSize:"30px" , marginTop:"-20px" , border:"2px solid pink" , borderRadius:"5px" , boxSizing: "border-box"}}>Login</p></Link>
                    </p> */}
              
                </Form>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
