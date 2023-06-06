import React, { useState, useEffect } from "react";
import { Dropdown } from "./Dropdown";
import Listbox from "./Listbox";
import Detail from "./Detail";
import axios from "axios";
import "./Search.css";

const Search = () => {
  const [token, setToken] = useState("");
  const [genres, setGenres] = useState({
    selectedGenre: "",
    listOfGenresFromAPI: [],
  });
  const [playlist, setPlaylist] = useState({
    selectedPlaylist: "",
    listOfPlaylistFromAPI: [],
  });
  const [tracks, setTracks] = useState({
    selectedTrack: "",
    listOfTracksFromAPI: [],
  });
  const [trackDetail, setTrackDetail] = useState(null);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            "613fe9aafd6a47ed8a9f835e672dedc8" + //ID
              ":" +
              "79ff1bb58e6a4579bf31954ca288add6" //PWD
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      console.log(tokenResponse.data.access_token);
      setToken(tokenResponse.data.access_token);

      axios("https://api.spotify.com/v1/browse/categories?locale=sv_US", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((genreResponse) => {
        setGenres({
          selectedGenre: genres.selectedGenre,
          listOfGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
  }, [genres.selectedGenre]);

  const genreChanged = (val) => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI,
    });

    axios(
      `https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    ).then((playlistResponse) => {
      setPlaylist({
        selectedPlaylist: playlist.selectedPlaylist,
        listOfPlaylistFromAPI: playlistResponse.data.playlists.items,
      });
    });

    console.log(val);
  };

  const playlistChanged = (val) => {
    console.log(val);
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI,
    });
  };

  const buttonClicked = (e) => {
    e.preventDefault();

    axios(
      `https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    ).then((tracksResponse) => {
      setTracks({
        selectedTrack: tracks.selectedTrack,
        listOfTracksFromAPI: tracksResponse.data.items,
      });
    });
  };

  const listboxClicked = (val) => {
    const currentTracks = [...tracks.listOfTracksFromAPI];

    const trackInfo = currentTracks.filter((t) => t.track.id === val);

    setTrackDetail(trackInfo[0].track);
  };

  return (
    <div className="container">
      <br />
      <h2>Music Search with Spotify</h2>
      <br />
      <form onSubmit={buttonClicked}>
        <Dropdown
          label="Genre:"
          options={genres.listOfGenresFromAPI}
          selectedValue={genres.selectedGenre}
          changed={genreChanged}
        />
        <br />
        <Dropdown
          label="Playlist:"
          options={playlist.listOfPlaylistFromAPI}
          selectedValue={playlist.selectedPlaylist}
          changed={playlistChanged}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <button type="submit">Search</button>
          </div>
        </div>
      </form>
      {trackDetail && (
        <div style={{ textAlign: "center" }}>
          <Detail {...trackDetail} />
        </div>
      )}
      <div className="row">
        <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
      </div>
    </div>
  );
};

export default Search;
