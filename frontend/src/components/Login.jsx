import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.css"
const Login = () => {
  const history = useNavigate();

  // const { login } = useAuth();

  const [error, setError] = useState('')
  const [otpsendDisable, setotpsendDisable] = useState(true);
  //const [check,setCheck] = useState(false);
  const [voterId,setVoterId] =useState("")
  const [otpInput,setOtpInput] = useState(true);

  const onChangeVoter = (e) =>{
    setVoterId(e.target.value)
    setotpsendDisable(!(voterId !== undefined || voterId !== null || voterId !== ""))
  }

  const sendOtp =(e) =>{
    //to-do integrate api
    //post api/
    //payload mai voter id jayegi jo 
    //
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        voterID:voterId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.valid)
        setOtpInput(true);
      })
      .catch((err) => {
        
      });
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('')
    //   await login(idref.current.value);
      history("/votepage")
    } catch {
    //   setError('failed to Login')
    }

    
  }

  return (
    <div className="form">
      <form>
        {error && <Alert varient="danger">{error}</Alert>}
        <h2>Log In</h2>
        <div className="input-container">
          <label>Voter Id No.</label>
          <input type="text" name="id" value={voterId} onChange={onChangeVoter} required/>
          {/* {renderErrorMessage("uname")} */}
          <div>
            <Button color="primary" disabled={otpsendDisable} onClick={sendOtp}> send otp</Button>
          </div>
        </div>
        <div className="input-container">
          <label>Enter Otp </label>
          <input type="text" name="otp" disabled={otpInput} required/>
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div>
          <Button color="primary" disabled={false} onClick={handleSubmit}>Check</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;