import React, { useState, useEffect } from "react";
import "./BinauralBeatsFocus.css";
import VideoCard from "../components/Video";
import axios from "axios";
import useFetch from "../components/useFetch";

export default function BinauralBeatsFocus() {
  const {data, loading, error} = useFetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=binauralbeats%20focus&key=${process.env.REACT_APP_YT_API_KEY}`)

  if (loading) return <h1>LOADING...</h1>;
  if(error) console.log(error);

  return (
    <div className="VideoSectionContainer">
      <h2 className="VideoSection__Title">Binaural Beats Focus</h2>
      <div className="lofiVideoSection">
        {data ? (
          <div className="VideosSection">
            {data.map((video) => {
              return (
                <VideoCard
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
