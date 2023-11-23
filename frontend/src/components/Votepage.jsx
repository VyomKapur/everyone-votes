import React, { useEffect, useState } from "react";
import VotingCard from "./VotingCard";
import "bootstrap/dist/css/bootstrap.css";
import Grid from '@mui/material/Grid';
import "./user.css";
import { useNavigate } from "react-router-dom";

function Votepage() {
    let [teams, setTeams] = useState([]);
    const history = useNavigate();
    const [voterId,setVoterId] = useState();

    useEffect(() => {
        fetch("http://localhost:3500/api/candidates/get", {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                setTeams(data?.candidates)
                console.log(teams)
            })
            .catch((error) => console.log(error))
        // setTeams(teamsJson);
    }, []);

    // function incrementVoteCount(teamId) {
    //     teams = teams.map((team) => {
    //         if (team._id === teamId) {
    //             team.votes = team.votes + 1;
    //         }
    //         return team;
    //     });
    //     setTeams(teams);
    // }
    const incrementVoteCount = async (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                VoterId: voterId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.valid) {
                    history("/finalpage")
                }
            })
            .catch((err) => {
                //kya likhu yaha
            });
    }

    return (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {teams?.map((team) => {
                return (
                    <Grid item xs={4}>
                        <VotingCard
                            team={team}
                            incrementVoteCount={(teamId) => incrementVoteCount(teamId)}
                        />
                    </Grid>
                );
            })}
            {/* <Grid item xs={6}>
          <Item>4</Item> */}
        </Grid>
    );
}
export default Votepage;
