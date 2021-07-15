import React from "react";
import "./LOFIRelax.css"
import VideoCard from "../components/Video";

export default function LOFIRelax() {
    return (
        <div className="VideoSectionContainer">
            <h2 className="sectionTitle">LOFI Relax Page</h2>
            <div className="lofiVideoSection">
                <VideoCard />

            </div>
        </div>
    );
}