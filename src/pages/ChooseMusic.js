import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import RecommendedVideos from "../components/RecommendedVideos";
import "./ChooseMusic.css";
import { useAuth } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import {
  StyledContainer,
  VideoSectionContainer,
  VideoSection,
  Title,
} from "../components/Styling/videoSectionGlobalStyle";

export default function ChooseMusic() {
  const { currentUser, logout } = useAuth();

  if (!currentUser) {
    return <Redirect to="/signin" />;
  }

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
