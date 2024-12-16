import React, { useEffect } from "react";
import { songs } from "@/data/songs";

const Home: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    document.querySelectorAll(".song-container-left, .song-container-right").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="home-container">
        <h1>Top <span className="rainbow">100</span> Songs I Discovered in 2024</h1>
        <p>Here are my 100 favorite songs I discovered in 2024 ranked in order!</p>
      </div>
      {songs.map((song, index) => (
        <div
          className={`${
            index % 2 === 0 ? "song-container-left" : "song-container-right"
          } animate-on-scroll`}
          key={index}
        >
          <img 
            className="song-image" 
            src={song.albumCover} 
            alt="Album Cover" 
            loading="lazy" 
          />
          <div className="song-text">
            <h1>{100 - index}</h1>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;