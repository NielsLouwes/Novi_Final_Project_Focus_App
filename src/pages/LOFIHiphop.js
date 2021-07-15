import React from "react";
import VideoCard from "../components/Video";
import "./LOFIHiphop.css"


export default function LOFIHiphop() {
    return (
        <div className="VideoSectionContainer">
            <h2 className="sectionTitle">LOFI Hip Hop</h2>
            <div className="LofiHipHopVideoSection">
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