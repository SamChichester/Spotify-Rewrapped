import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <div className="section">
          <h2 className="section-title">What is this project?</h2>
          <p className="section-description">
            This project is my attempt to share some of my favorite songs that I discovered in 2024. 
            I curated a list of all songs I added to my playlist in 2024 and ranked them top 100 style! 
            I created this website as a frontend-only project to increase my proficiency with certain frontend technologies, 
            like Next.js.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">What technologies did you use?</h2>
          <ul className="tech-list">
            <li className="tech-item">Next.js</li>
            <li className="tech-item">HTML</li>
            <li className="tech-item">Sass</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
