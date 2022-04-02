import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="landingPage">
      <div className="welcome-text">
        <h2 className="focusing-text">Focusing made easy.</h2>
        <h2 className="genre-text">
          Pick your favorite music or study live.
        </h2>
      </div>
      <div className="landingPage__buttonContainer">
        <button className="landingPage__button">
          <Link
            style={{ textDecoration: "none" }}
            className="landingPage__buttonText"
            to="/choose-music"
          >
            Choose Music{" "}
          </Link>
        </button>
        <button className="landingPage__button">
          <Link
            style={{ textDecoration: "none" }}
            className="landingPage__buttonText"
            to="/study-live"
          >
            {" "}
            Study Live
          </Link>
        </button>
      </div>
    </main>
  );
}
