import React, { useState, useEffect } from "react";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./login.css"
import AreaJson from "./area.json";
import { ReactSession } from 'react-client-session';

const Login = () => {
  const history = useNavigate();

  // const { login } = useAuth();

  const [error, setError] = useState('')
  const [otpsendDisable, setotpsendDisable] = useState(true);
  //const [check,setCheck] = useState(false);
  const [voterId, setVoterId] = useState("")
  const [area, setArea] = useState([]);
  const [otpInput, setOtpInput] = useState(true);
  const [checkOtpDisable, setCheckOtpDisable] = useState(true);
  const [otp, setOtp] = useState("")

  useEffect(() => {
    setArea(AreaJson);
  }, []);

  const onChangeVoter = (e) => {
    
    setVoterId(e.target.value)
    setotpsendDisable(!(voterId !== undefined || voterId !== null || voterId !== ""))
  }

  const onChangeArea = (event) => {
    event.preventDefault();
  };

  const selectArea =(event) =>{
    setArea(event.target.value);
  }

  const sendOtp = (e) => {
    e.preventDefault();
    fetch('http://localhost:3500/api/admin/get', {
      method: 'POST',
      body: JSON.stringify({
        voterID: voterId,
        Area: area
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          setOtpInput(true);
          ReactSession.set("VoterId", "voterId");     
        } else {
          setError("Invalid Voter Id")
        }
      })
      .catch((err) => {
        //kya likhu yaha
      });
    setVoterId("");
  }


  const onChangeOtp = (e) => {
    setOtp(e.target.value)
    setCheckOtpDisable(!(otp !== undefined || otp !== null || otp !== ""))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        Otp: otp,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.valid) {
          history("/voterpage")
        } else {
          setError("Invalid otp")
        }
      })
      .catch((err) => {
        //kya likhu yaha
      });
  }

  return (
    <div className="form">
      <form>
        {error && <Alert varient="danger">{error}</Alert>}
        <h2>Voter Log In</h2>
        <div className="input-container">
          <label>Voter Id No.</label>
          <input type="text" name="id" value={voterId} onChange={onChangeVoter} required />
          {/* {renderErrorMessage("uname")} */}
          <select value={area.city} onChange={onChangeArea}>
            {area.map((option) => (
              <option value={option.id} onClick={selectArea}>{option.city}</option>
            ))}
          </select>
          <div>
            <Button disabled={otpsendDisable} onClick={sendOtp}> send otp</Button>
          </div>
        </div>
        <div className="input-container">
          <label>Enter Otp </label>
          <input type="text" name="otp" value={otp} onChange={onChangeOtp} disabled={otpInput} required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div>
          <Button disabled={checkOtpDisable} onClick={handleSubmit}>Check</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;