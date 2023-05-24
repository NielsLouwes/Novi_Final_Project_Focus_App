import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const titleAndGenres = [
  {
    title: "LOFI",
    genres: [
      { genre: "Hip Hop", link: "/choose-music/lofi-hiphop" },
      { genre: "Chill", link: "/choose-music/lofi-chill" },
      { genre: "Piano", link: "/choose-music/lofi-piano" },
    ],
  },
  {
    title: "Classical Music",
    genres: [
      { genre: "Classical", link: "/choose-music-classical-music-classical" },
      {
        genre: "Neo Classical",
        link: "/choose-music-classical-music-neo-classical",
      },
      {
        genre: "Dark Academia",
        link: "/choose-music-classical-music-dark-academia",
      },
    ],
  },
  {
    title: "Binaural Beats",
    genres: [
      { genre: "Relax", link: "/choose-music-binaural-beats-relax" },
      { genre: "Focus", link: "/choose-music-binaural-beats-focus" },
      { genre: "Motivation", link: "/choose-music-binaural-beats-motivation" },
    ],
  },
  {
    title: "Nature Sounds",
    genres: [
      { genre: "Rain", link: "/choose-music-nature-sounds-rain" },
      { genre: "Nature", link: "/choose-music-nature-sounds-nature" },
      { genre: "Fireplace", link: "/choose-music-nature-sounds-fireplace" },
    ],
  },
];

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
