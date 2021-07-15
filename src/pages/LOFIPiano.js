import React from "react";
import VideoCard from "../components/Video";
import "./LOFIPiano.css"

export default function LOFIPiano() {
    return (
        <div className="VideoSectionContainer">
            <h2 className="sectionTitle">LOFI Piano</h2>
            <div className="lofiVideoSection">
            <VideoCard />
            </div>
        </div>
    );
}