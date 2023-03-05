import React from 'react';
// import Hero from "../components/Hero";
// import glastonbury2 from "./glastonbury2.png";




function Home() {
    return (
        <div>
        {/* <Hero style={{ backgroundImage: "url('./glastonbury2.png')" }}>
        <h1>Hey, I'm Hélène</h1>
        <h2>Front-End Web Developer based in Bristol.</h2>
      </Hero> */}
        <div className="container">
          {/* <img src={glastonbury2} /> */}
            <p>Currently upskilling for a career change. Studying
          a 16 week intense Skills Bootcamp in Front-End Web Developer with edX with a graduation end of March 2023.
          <br />
          <br />With more than five years experience in Marketing, working both in agency and client-side, I have mastered
          skills in communication and thrive in environments where knowledge-sharing and teamwork are a priority.
          <br />
          <br />Outside of work and this course, I love the outdoors, growing giant courgettes, hiking, running, music
          festivals, craft beers, spending time with friends and dogs and I have a
          passion for Marcel Proust's <i>In Search of Lost Time</i>.
            </p>
        </div>
        </div>
    )
}


export default Home;