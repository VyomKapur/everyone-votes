import React from "react";
import {Button } from "react-bootstrap";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function VotingCard(props) {
    let { team, incrementVoteCount } = props;

    return (
        // <Card>
        //     {/* <Card.Img variant="top" src={`/assets/images/${team.logo}`} /> */}
        //     <Card.Body>
        //         <Card.Title>{team.name}</Card.Title>
        //         <Button variant="success" onClick={() => incrementVoteCount(team._id)}>
        //             Vote
        //         </Button>
        //     </Card.Body>
        //     <Card.Footer>Vote count: {team.votes}</Card.Footer>
        // </Card>
        <Card sx={{ maxWidth: 600 }}>
            <CardMedia
        sx={{ height: 120 }}
        // image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {team.name}
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex", justifyContent: "center"}}>
                <Button variant="success" onClick={() => incrementVoteCount(team._id)}>
                    Vote
                </Button>
      </CardActions>
    </Card>
    );
}


export default VotingCard;
