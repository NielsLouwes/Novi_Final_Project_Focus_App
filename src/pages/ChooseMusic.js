import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import RecommendedVideos from "../components/RecommendedVideos";
import "./ChooseMusic.css";

export default function ChooseMusic() {

  return (
    <div className="VideoSectionContainer">
      <main className="main-section-container">
        <div className="genre-section">
          <Sidebar />
        </div>
        <div className="mostPopularContainer">
          <RecommendedVideos />
        </div>
      </main>
    </div>
  );
}
