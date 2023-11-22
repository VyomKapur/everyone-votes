import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VotingCard from "./VotingCard";
import teamsJson from "../lib/teams.json";
import "../assets/styles.scss";
import "bootstrap/dist/css/bootstrap.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function Votepage() {
    let [teams, setTeams] = useState([]);

    useEffect(() => {
        setTeams(teamsJson);
    }, []);

    function incrementVoteCount(teamId) {
        teams = teams.map((team) => {
            if (team._id === teamId) {
                team.votes = team.votes + 1;
            }
            return team;
        });
        setTeams(teams);
    }

    return (
        
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {teams.map((team) => {
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
