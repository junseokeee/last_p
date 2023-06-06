import React, { Component } from "react";
import songs from "./Songs";
import "./Today.css"; // Import the CSS file for styling

export default class Today extends Component {
  render() {
    return (
      <div className="song-container">
        <br />
        <h2>Featured music of the day</h2>
        <br />
        <div className="song-grid">
          {songs.map((song) => (
            <div className="song-item" key={song.id}>
              <img src={song.image} alt={song.title} />
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
