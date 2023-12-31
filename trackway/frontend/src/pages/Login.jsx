import React, { useState,useContext} from "react";
import "../style/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";

import loginIMg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../Utilis/config";

const Login = () => {

  const [credential, setCredential] = useState({  // useState
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = async (e) => {   // main function for backend call
    e.preventDefault();

    dispatch ({type:'LOGIN_START'})

    try {

      // sending credential to backend
      
      const res =await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(credential)
      
      })
      
      // got result from backend 
      const result = await res.json()
      if(!res.ok) alert(result.message)

      console.log(result.data);
      dispatch({type:'LOGIN_SUCCESS',payload:result.data});
      navigate('/home')
     
    }
      catch (err) {
        dispatch ({type:'LOGIN_FAILURE', payload:err.message});
        navigate('/login');
    }
  };

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

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
                <h2  style={{fontSize:"25px"}}>Login</h2>

                <Form onSubmit={handleClick}>

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

                  <Button  style={{fontSize:"25px",}}
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>

                  <p style={{fontSize:"18px"}}>
                    Don't have an Account ? <Link to="/register" style={{fontSize:"25px"}}>Create</Link>
                  </p>
                  
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
