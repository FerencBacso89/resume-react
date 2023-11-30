import React from 'react';
import ProfilImg from "../../assets/img/profile.jpg";
import './welcome.css';
//import './Components/Home/welcome.css';


function Welcome() {
  return (
    <div className='mindset container-fluid'>
      <div className='row'>
          <div className='col-3 imgPos' ><img id="myImg" className=' img-fluid' alt='Profile' src={ProfilImg}></img></div>
          <div className='col-6 Textpos'>
                <article id='mindsetText'>
                <h2 className='mainTitle'>Welcome to My portfolio site</h2>
                My name is Ferenc Bacsó, and I have been working as a frontend developer since 2019.
                <p>I am thrilled to share my work and passion for web development with you.
                  In 2022, I was recognized for my outstanding contributions in the field, an achievement that I am truly proud of.</p> 
                  However, my life is not solely focused on coding and technology. I have a deep love for birds and birdwatching, which brings me tranquility and inspiration. Hence, I decided to incorporate a flying goose logo, symbolizing my constant pursuit of growth and improvement. On this website, I showcase my projects and work that I have been involved.
                <p>Thank you for visiting, and I hope you find the inspiration and interest that I aimed to convey on my website.</p>
                </article>
          </div>
      </div>
    </div>
  )
}

export default Welcome