import React from "react";
import VideoCard from "../components/Video";
import "./LOFIPiano.css"


export default function ClassClassical() {
    return (
        <div className="VideoSectionContainer">
            <h2 className="sectionTitle">Classical Music</h2>
            <div className="lofiVideoSection">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )}