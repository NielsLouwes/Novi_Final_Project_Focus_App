import React from "react";
import VideoCard from "./Video";
import useFetch from "./useFetch";
import {
  StyledContainer,
  VideoSectionContainer,
  VideoSection,
  Title,
} from "../components/Styling/videoSectionGlobalStyle";

export default function RecommendedVideos() {
  const { data, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=lofi%20study&key=${process.env.REACT_APP_YT_API_KEY}`
  );

  if (error) console.log(error);

  return (
    <StyledContainer className="VideoSectionContainer">
      <VideoSectionContainer className="lofiVideoSection">
      <Title>Most Popular</Title>
        {data && (
          <VideoSection className="VideosSection">
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
          </VideoSection>
        )}
      </VideoSectionContainer>
    </StyledContainer>
  );
}
