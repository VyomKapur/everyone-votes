import React, { useState,useEffect } from "react";
import AreaJson from "./area.json";
import { Button } from "react-bootstrap";
import Grid from '@mui/material/Grid';
import Votes from "./AreaVoteCard";
import "./areavotes.css";
const allvotes = {
    allusers: 10,
    votedusers: 8,
    pending: 2
}
const AreaVotes =()=>{
    const [area, setArea] = useState([]);
    const [data,setData] = useState({});
    const [isVisible, setIsvisible] = useState(true)
    

    useEffect(() => {
        setArea(AreaJson);
    }, []);

    const onChangeArea = (event) => {
        event.preventDefault();
    };

    const selectArea = (event) => {
        setArea(event.target.value);
    }

    const showData = async (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                Area: area
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                //setArea(AreaJson);
            })
            .catch((err) => {
                //kya likhu yaha
            });


    }
    return (
        <>
        <h1>Welcome, Voting Officer</h1>
        <p>select the constituency</p>
        <div className="sub_header">
                <select value={area.city} onChange={onChangeArea}>
                        {area.map((option) => (
                            <option value={option.id} onClick={selectArea}>{option.city}</option>
                        ))}                 
                </select>
                <Button variant="success" onClick={showData}>
                    Show
                </Button>
                {isVisible && <Votes data={allvotes} />}
        </div>
            
        {/* <p>We eat {value}!</p> */}
        </>
    );
};

export default AreaVotes;