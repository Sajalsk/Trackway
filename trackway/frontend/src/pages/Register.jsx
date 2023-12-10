import React, { useState, useContext, useEffect } from "react";
import "../style/login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Register.css";

import loginIMg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../Utilis/config";

// import Verify from "./Verify";

const Register = (props) => {
  
  const [credential, setCredential] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    card: undefined,
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // var [count, setCount] = useState(0);
  var [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // eslint-disabled-next-line
    // setCount = 0;
    setDisabled(true);
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      console.log(credential);

      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(credential),
      });

      const result = await res.json();
      console.log(result);

      if (!res.ok) alert(result.message);

      dispatch({ type: "REGISTER_SUCCESS" });
      alert("User Created Successfully");
      navigate("/login");
      
    } catch (err) {
      console.log("In catch");
      alert(err.message);
    }
  };

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  /*
  const Verify = () => {
    // window.open ('https://www.signzy.com/fintech-apis/aadhaar-verification-api/');
    // setCount=1;
    alert("Verfied");
    setCount = count + 1;
  //  console.log(setCount);
/*

    // console.log(setDisabled);
  };

  /*
  const statecheck = () => {
    //  console.log(setDisabled);
   //  console.log(setCount);
  };
  */

  // The Verhoeff Algorithm ?

  const d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
  ];

  // permutation table
  const p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
  ];

  // validates Aadhar number received as string

  // The Verhoeff Algorithm ?

  const validate = (aadharNumber) => {
    let c = 0;
    let invertedArray = aadharNumber.split("").map(Number).reverse();

    invertedArray.forEach((val, i) => {
      c = d[c][p[i % 8][val]];
    });

    return c === 0;
  };

  const aadhar = () => {

    var message = document.getElementById("message");
    var aadharNo = document.getElementById("card").value;

    if (validate(aadharNo) && aadharNo.length > 0) {
      message.innerHTML =
        "<span style='color: purple;  font-size:18px; '>Number is valid now you can Register 👍🏻 </span>";
      setDisabled(false);
      // console.log(credential.email);
    } else {
      message.innerHTML =
        "<span style='color: brown;  font-size: 20px; '> Please Enter a valid number 👎🏻</span>";
      setDisabled(true);
    }
    setTimeout(() => {
      message.innerHTML = " ";
    }, 3000);
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

                  <FormGroup>
                    <label htmlFor="card">Aadhar Card No.</label>
                    <input
                      className="aadhar"
                      type="text"
                      required
                      id="card"
                      placeholder="Aadhar Card No."
                      name="card"
                      onChange={handleChange}
                    />
                    <small
                      id="message"
                      className="form-text text-muted"
                    ></small>
                  </FormGroup>

                  {/* Aadhar Verify  */}
                  <Button
                    style={{
                      marginBottom: "10px",
                      marginLeft: "60px",
                      width: "200px",
                      padding: "10px",
                      height: "50px",
                    }}
                    onClick={aadhar}
                    className="btn btn-dark"
                  >
                    Verify your Aadhar
                  </Button>

                  <div>
                    {/* <Button    
                    style={{marginBottom:"10px" ,marginLeft:"35px" , padding:"20px",height:"30px"}} 
                    onClick={Verify}
                    className="btn btn-danger"
                  >
                    ID Verification
                  </Button> */}
                    {/* onclick={props.Verify}  */}
                  </div>

                  {/* Register  */}
                  <Button
                    disabled={disabled}
                    style={{
                      fontSize: "25px",
                      marginTop: "20px",
                      marginLeft: "58px",
                      backgroundColor: "",
                      width: "200px",
                      height: "50px",
                    }}
                    className="btn btn-success"
                    type="submit"
                  >
                    Register
                  </Button>

                  <div>{/* <button onClick={statecheck}>State</button> */}</div>

                  {/* Login */}
                  <div>
                    <p style={{ fontSize: "18px" }}>
                      Already have a Account ?{" "}
                    </p>

                    <Button
                      onClick={() => {
                        navigate("/login");
                      }}
                      style={{ marginLeft: "130px" }}
                      className="btn btn-dark"
                    >
                      Login
                    </Button>
                  </div>
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
