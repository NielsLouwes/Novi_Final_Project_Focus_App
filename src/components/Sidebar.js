import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <Link style={{ textDecoration: "none" }} to="/choose-music/lofi-hiphop">
         <SidebarRow genre="LOFI" title="Hip Hop" />
      </Link>
      <Link style={{ textDecoration: "none" }} to="/choose-music/lofi-chill">
        <SidebarRow title="Chill" />
      </Link>

      <Link style={{ textDecoration: "none" }} to="/choose-music/lofi-piano">
        <SidebarRow title="Piano" />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-classical-music-classical"
      >
        <SidebarRow genre="Classical Music" title="Classical" />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-classical-music-neo-classical"
      >
        <SidebarRow title="Neo Classical" />
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-classical-music-dark-academia"
      >
        <SidebarRow title="Dark Academia" />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-binaural-beats-relax"
      >
        <SidebarRow genre="Binaural Beats" title="Relax" />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-binaural-beats-focus"
      >
        <SidebarRow title="Focus" />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-binaural-beats-motivation"
      >
        <SidebarRow title="Motivation" />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-nature-sounds-rain"
      >
        <SidebarRow title="Rain" genre="Nature Sounds" />
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-nature-sounds-nature"
      >
        <SidebarRow title="Nature" />
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-nature-sounds-fireplace"
      >
        <SidebarRow title="Fireplace" />
      </Link>
    </div>
  );
}
