import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Image } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function log(){
      console.log("hello");
  }

  return (

    
    <center className=" container" 
        style={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center"
     }}
    > 
        <div className=" card shadow-lg  bg-white"

        >
            <div className="row rounded">
                <div className="col-4 text-center p-0 mb-0"
                 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                 >
                    <center>
                    <Image src={require('./logo.png')} responsive />   
                    </center>
                     
                </div>
                <div className="col-8 p-0 mb-0">
                <div className="Login">
          <form onSubmit={handleSubmit}>
           <FormGroup controlId="email" bsSize="large">
            <FormControl
            autoFocus
            type="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button id="LoginBtn" block bsSize="large" onClick={log} disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
                </div>
            </div>
        </div>     
   
    
    </center>
  );
}