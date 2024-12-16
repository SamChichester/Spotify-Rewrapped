import React from "react";
import { songs } from "../data/songs";

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Home</h1>

      {songs.map((song, index) => (
        <div 
          className={index % 2 === 0 ? "song-container-left" : "song-container-right"} 
          key={index}
        >
          <img className="song-image" src={song.albumCover} alt="Album Cover" loading="lazy" />
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