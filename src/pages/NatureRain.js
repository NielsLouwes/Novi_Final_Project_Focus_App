import React from "react";
import VideoCard from "../components/Video";
import {
  StyledContainer,
  VideoSectionContainer,
  VideoSection,
  Title,
} from "../components/Styling/videoSectionGlobalStyle";
import useFetch from "../components/useFetch";

export default function NatureSoundsRain() {
  const { data, loading, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=rainsounds&key=${process.env.REACT_APP_YT_API_KEY}`
  );

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

  return (
    <StyledContainer className="VideoSectionContainer">
      <Title className="VideoSection__Title">Rain Sounds</Title>
      <VideoSectionContainer className="lofiVideoSection">
        {data ? (
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
        ) : (
          <h3>Loading</h3>
        )}
      </VideoSectionContainer>
    </StyledContainer>
  );
}
