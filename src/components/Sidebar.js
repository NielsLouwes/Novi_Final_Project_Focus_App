import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <SidebarRow genre="LOFI" />
      <Link style={{ textDecoration: "none" }} to="/choose-music/lofi-hiphop">
        <SidebarRow title="Hip Hop" />
      </Link>
      <Link style={{ textDecoration: "none" }} to="/choose-music/lofi-chill">
        <SidebarRow title="Chill" />
      </Link>

      <Link style={{ textDecoration: "none" }} to="/choose-music/lofi-piano">
        <SidebarRow title="Piano" />
      </Link>

      <SidebarRow genre="Classical Music" />

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-classical-music-classical"
      >
        <SidebarRow title="Classical" />
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
      <SidebarRow genre="Binaural Beats" />

      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-binaural-beats-relax"
      >
        <SidebarRow title="Relax" />
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

      <SidebarRow genre="Nature Sounds" />
      <Link
        style={{ textDecoration: "none" }}
        to="/choose-music-nature-sounds-rain"
      >
        <SidebarRow title="Rain" />
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
