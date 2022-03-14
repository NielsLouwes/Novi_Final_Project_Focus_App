import React, { useState, useEffect } from "react";
import "./NatureRain.css";
import VideoCard from "../components/Video";
import axios from "axios";

export default function NatureSoundsRain() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchNatureSoundsRain() {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=rainsounds&key=${process.env.REACT_APP_YT_API_KEY}`
        );
        setVideos(response.data.items);
      } catch (e) {
        console.error(e);
      }
    }
    fetchNatureSoundsRain();
  }, []);

  return (
    <div className="VideoSectionContainer">
      <h2 className="VideoSection__Title">Rain sounds</h2>
      <div className="lofiVideoSection">
        {videos ? (
          <div className="VideosSection">
            {videos.map((video) => {
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
