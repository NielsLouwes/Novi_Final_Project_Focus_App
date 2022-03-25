import React, { useState, useEffect } from "react";
import "./NatureNature.css";
import VideoCard from "../components/Video";
import {
  StyledContainer,
  VideoSectionContainer,
  VideoSection,
  Title,
} from "../components/Styling/videoSectionGlobalStyle";
import useFetch from "../components/useFetch";

export default function NatureSoundsNature() {
  const { data, loading, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=naturesounds&key=${process.env.REACT_APP_YT_API_KEY}`
  );

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  return (
    <div className="VideoSectionContainer">
      <h2 className="VideoSection__Title">Nature Sounds</h2>
      <div className="lofiVideoSection">
        {data ? (
          <div className="VideosSection">
            {data.map((video) => {
              return (
                <VideoCard
                  //insert ID props with correct location in JSON file
                  id={video.id.videoId}
                  title={video.snippet.title}
                  thumbnail={video.snippet.thumbnails.default.url}
                  channel={video.snippet.channelTitle}
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
