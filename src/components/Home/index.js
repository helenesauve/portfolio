import React from 'react';
// import helene from './helene.jpeg';
import helene from './helene.jpeg'
import "./style.css";
import Hero from '../Hero';



function Home() {
    return (
        <div>
        <Hero />

        <div className="container flex-container">
          <img src={helene} alt="Helene Sauve" className="flex-child-1"/>
            <p className="flex-child-2">Graduate of a Front-End Web Development bootcamp with edX with high scoring marks, I have a keen interest in React.js and I am looking to expand my skills in back-end development, in particular using the Python-based web application Django.
          <br />
          <br />With more than six years experience in Marketing, working both in agency and client-side, I have mastered
          skills in communication and thrive in environments where knowledge-sharing and teamwork are valued.
          <br />
          <br />Outside of work and this course, I love the outdoors, growing veg, hiking, running, music
          festivals, craft beers, spending time with friends and dogs and I have a
          passion for Marcel Proust's <i>In Search of Lost Time</i>.
            </p>
        </div>
        </div>
    )
}


export default Home;