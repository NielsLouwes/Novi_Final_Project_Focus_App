import React, { useState, useEffect } from "react";
import "./ClassDarkAcademia.css";
import VideoCard from "../components/Video";
import axios from "axios";

export default function DarkAcademia() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchClassDarkAcademia() {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=darkacademia&key=${process.env.REACT_APP_YT_API_KEY}`
        );
        setVideos(response.data.items);
      } catch (e) {
        console.error(e);
      }
    }
    fetchClassDarkAcademia();
  }, []);

  return (
    <div className="VideoSectionContainer">
      <h2 className="VideoSection__Title">Dark Academia</h2>
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
