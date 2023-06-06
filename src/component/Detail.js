import React from "react";

const Detail = ({ album, artists, name }) => {
  return (
    <div>
      <div>
        <img src={album.images[0].url} alt={name} />
        <label htmlFor={name}>
          <div className="name-container">
            <span className="name-label">{name}</span>
            <span className="artist-label">-{artists[0].name}</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Detail;
