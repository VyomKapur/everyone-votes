import React from "react";
import { Button } from "react-bootstrap";
import "./user.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";

function User() {
  const history = useNavigate();

  const login =()=>{
    history("/login")
  }
  
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Are you a Voater</h5>
                <Button onClick={login}>Click here </Button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Are you a Votting Officer</h5>
                <Button onClick={login}>Click here </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
