import React, { useState, useEffect } from "react";
import "./RecommendedVideos.css";
import axios from "axios";
import VideoCard from "./Video";
import useFetch from "./useFetch"

export default function RecommendedVideos() {
  const {data, loading, error} = useFetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=lofi%20study&key=${process.env.REACT_APP_YT_API_KEY}`)

  if (loading) return <h1>LOADING...</h1>;
  if(error) console.log(error);

  return (
    <div className="recommendedVideos">
      <h2 className="VideoSection__Title">Most Popular</h2>
      <div className="videoSectionContainer">
        {data ? (
          <div className="VideosSection">
            {data.map((data) => {
              return (
                <VideoCard
                  id={data.id.videoId}
                  title={data.snippet.title}
                  channel={data.snippet.channelTitle}
                  key={data.id.videoId}
                />
              );
            })}
          </div>
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </div>
  );
}
