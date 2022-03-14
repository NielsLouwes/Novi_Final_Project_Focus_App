import React, { useState, useEffect } from "react";
import "./RecommendedVideos.css";
import axios from "axios";
import VideoCard from "./Video";

export default function RecommendedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("WHAT IS VIDEOS?", videos);

    async function fetchPopularVideos() {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=lofi%20study&key=${process.env.REACT_APP_YT_API_KEY}`
        );
        setVideos(response.data.items);
      } catch (e) {
        console.error(e);
      }
    }
    fetchPopularVideos();
  }, []);

  return (
    <div className="recommendedVideos">
      <h2 className="VideoSection__Title">Most Popular</h2>
      <div className="videoSectionContainer">
        {videos ? (
          <div className="VideosSection">
            {videos.map((video) => {
              return (
                <VideoCard
                  id={video.id.videoId}
                  title={video.snippet.title}
                  channel={video.channel}
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
