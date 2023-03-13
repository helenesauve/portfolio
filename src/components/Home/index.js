import React from 'react';
import helene from './helene.jpeg';
import "./style.css";
import Hero from '../Hero';



function Home() {
    return (
        <div>
        <Hero />

        <div className="container flex-container">
          <img src={helene} alt="Helene Sauve" className="flex-child-1"/>
            <p className="flex-child-2">Currently upskilling for a career change. Studying
          a 16 week intense Skills Bootcamp in Front-End Web Developer with edX with a graduation end of March 2023.
          <br />
          <br />With more than five years experience in Marketing, working both in agency and client-side, I have mastered
          skills in communication and thrive in environments where knowledge-sharing and teamwork are valued.
          <br />
          <br />Outside of work and this course, I love the outdoors, growing vegetables, hiking, running, music
          festivals, craft beers, spending time with friends and dogs and I have a
          passion for Marcel Proust's <i>In Search of Lost Time</i>.
            </p>
        </div>
        </div>
    )
}


export default Home;