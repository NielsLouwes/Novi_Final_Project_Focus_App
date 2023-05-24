import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { titleAndGenres } from "./Sidebar.util";

export default function Sidebar() {
  const renderSideBarGenres = () =>
    titleAndGenres.map((item) => (
      <div className="sidebarRow">
        <h2 className="sidebarRow__genre">{item.title}</h2>
        {item.genres.map((subGenre) => (
          <Link className="sidebarRow__genre" to={subGenre.link}>
            {subGenre.genre}
          </Link>
        ))}
      </div>
    ));

  return <div className="sidebar-container">{renderSideBarGenres()}</div>;
}
