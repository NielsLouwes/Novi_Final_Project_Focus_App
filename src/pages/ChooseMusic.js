import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import RecommendedVideos from "../components/RecommendedVideos";
import "./ChooseMusic.css";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";

export default function ChooseMusic() {
  // const { currentUser, logout } = useAuth();

  // if (!currentUser) {
  //   return <Redirect to="/signin" />;
  // }
  // console.log(currentUser);

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
