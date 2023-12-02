import React from 'react'
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import './introduce.css';
//import Headimg from "../../assets/img/HeaderName_job.png";
import Hun from "../../assets/img/hu.svg"


const calcAge=() =>{
  const theBigday= new Date('1989-04-02');
  const currDate= new Date();
  const age = currDate.getFullYear() - theBigday.getFullYear();
  return age;
}
function Introduce() {
  /*dynamic hanadle how many years old */
 // const [age, setAge] = React.useState(calcAge());
  return (
    <>
    <section className="goals">       
      <div className='container-fluid introTitle'><h1>Curriculum Vitae (CV)</h1></div>      
    </section>
    <section className='infoCards container-fluid row'>
            <div class="card-deck row">
              <div class="card-info">              
                <div class="card-body">
                  <h2 class="card-title">Personal details</h2>
                 <section className='info'>
                        <div className='general'>
                              <span className='row'>Name: Ferenc Bacso</span>
                              <span className='row'>Nationality: Hungary <img src={Hun}  alt='Hungarian National flag'></img></span>
                              <span className='row'>How old am I ? Now I am {calcAge()} years old.</span>
                              <span className='row'>When i got my first job? In 2019.</span>
                              <span className='row'>What are my hobbies? My hobbies for example Birdwatching and mountain hike</span>
                        </div>                       
                 </section>
                 
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              
            </div>
    </section>
        <section className='skill container-fluid'>
              <div class="card-row row">
                <div className='col-6 '>
                        <div class="cardDeep">              
                          <div class="card-body">
                            <h2 class="card-title">skills & education</h2>
                                  <div className='gal'>
                                        <span className='row'>Na</span>
                                        <span className='row'>Nationality: Hungary </span>
                                        <span className='row'>How old am I ? Now I am {calcAge()} years old.</span>
                                        <span className='row'>When i got my first job? In 2019.</span>
                                        <span className='row'>What are my hobbies? My hobbies for example Birdwatching and mountain hike</span>
                                  </div>                       
                          </div>
                          <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                          </div>
                        </div>
                </div>
                <div className='col-6'>
                        <div class="cardDeep">                
                          <div class="card-body">
                            <h2 class="card-title">Proud myself</h2>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                          </div>
                          <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                          </div>
                        </div>
                </div>
            </div>
          </section>
    
        
    </>
  )
}

export default Introduce
/* MUI CARD
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
*/