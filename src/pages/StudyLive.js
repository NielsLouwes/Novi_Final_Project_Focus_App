import React, { useState, useEffect } from "react";
import {
  StyledContainer,
  VideoSectionContainer,
  VideoSection,
  Title,
} from "../components/Styling/videoSectionGlobalStyle";
import VideoCard from "../components/Video";
import { Link, Redirect } from "react-router-dom";
import "./StudyLive.css";
import { useAuth } from "../contexts/AuthContext";
import useFetch from "../components/useFetch";

export default function StudyLive() {
  const [videos, setVideos] = useState([]);
  const { currentUser, logout } = useAuth();

  const { data, loading, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&&videoEmbeddable:true&maxResults=9&q=studywithme&key=${process.env.REACT_APP_YT_API_KEY}`
  );

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
  if (!currentUser) {
    return <Redirect to="/signin" />;
  }

  return (
    <div className="StudyLive">
      <h2 className="StudyLive__Text">Study along with a buddy</h2>
      <div className="StudyLive__VideosSection">
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

        <h2 className="StudyLive__TextTwo">
          {" "}
          Nobody online?{" "}
          <Link className="link-style" to="/choose-music">
            Check out videos
          </Link>
        </h2>
      </div>
    </div>
  );
}
