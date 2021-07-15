import React from "react";
import VideoCard from "../components/Video";
import "./LOFIPiano.css"
import Sidebar from "../components/Sidebar";

export default function NatureSoundsRain() {
    return (
        <div className="VideoSectionContainer">
            <h2 className="sectionTitle"> Rain section</h2>
            <div className="lofiVideoSection">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    );
}