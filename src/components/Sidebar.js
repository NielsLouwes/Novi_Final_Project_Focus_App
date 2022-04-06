import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";
import "./sidebar.css";


//WORKING ON PUTTING SIDEBAR IN OBJECTS TO EASILY MAP THROUGH TO REDUCE CODE
const lofiGenres = ["Hip Hop", "Chill", "Piano"];

const titleAndGenres = {
  title: {
    one: "LOFI",
    two: "Classical Music",
    three: "Binaural Beats",
    four: "Nature Sounds",
  },
  genres: {},
};

export default function Sidebar({ targetDate }) {
  const [timer, setCounter] = useState(60);
  
  return (
    <div className="sidebar-container">
      <div className="sidebarRow">
        <h2 className="sidebarRow__genre">{titleAndGenres.title.one}</h2>
        <Link className="sidebarRow__genre" to="/choose-music/lofi-hiphop">
          {lofiGenres[0]}
        </Link>
        <Link className="sidebarRow__genre" to="/choose-music/lofi-chill">
          Chill
        </Link>
        <Link className="sidebarRow__genre" to="/choose-music/lofi-piano">
          Piano
        </Link>
      </div>

      <div className="sidebarRow">
        <h2 className="sidebarRow__genre">{titleAndGenres.title.two}</h2>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-classical-music-classical"
        >
          Classical
        </Link>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-classical-music-neo-classical"
        >
          Neo Classical
        </Link>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-classical-music-dark-academia"
        >
          Dark Academia
        </Link>
      </div>

      <div className="sidebarRow">
        <h2 className="sidebarRow__genre">{titleAndGenres.title.three}</h2>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-binaural-beats-relax"
        >
          Relax
        </Link>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-binaural-beats-focus"
        >
          Focus
        </Link>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-binaural-beats-motivation"
        >
          Motivation
        </Link>
      </div>

      <div className="sidebarRow">
        <h2 className="sidebarRow__genre">{titleAndGenres.title.four}</h2>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-nature-sounds-rain"
        >
          Rain
        </Link>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-nature-sounds-nature"
        >
          Nature
        </Link>
        <Link
          className="sidebarRow__genre"
          to="/choose-music-nature-sounds-fireplace"
        >
          Fireplace
        </Link>
      </div>
        {/* <CountdownTimer countdownTimeStampMS={1643673600000} /> */}
    </div>
  );
}
