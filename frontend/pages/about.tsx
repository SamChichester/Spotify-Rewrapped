import React from "react";

const About: React.FC = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <div>
        <div>
          <h2>What is this project?</h2>
          <p>
            This project is my attempt to share some of my favorite songs that I discovered in 2024. 
            I curated a list of all songs I added to my playlist in 2024 and ranked them top 100 style! 
            I created this website as a frontend-only project to increase my profiency with certain frontend technologies, 
            like Next.js.
          </p>
        </div>
        <div>
          <h2>What technologies did you use?</h2>
          <ul>
            <li>Next.js</li>
            <li>HTML</li>
            <li>Sass</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;