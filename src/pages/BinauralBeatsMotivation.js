import React from "react";
import VideoCard from "../components/Video";
import useFetch from "../components/useFetch";
import {
  StyledContainer,
  VideoSectionContainer,
  VideoSection,
  Title,
} from "../components/Styling/videoSectionGlobalStyle";

export default function BinauralBeatsMotivation() {
  const { data, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=binauralbeats%20motivation&key=${process.env.REACT_APP_YT_API_KEY}`
  );

  if (error) console.log(error);

  return (
    <StyledContainer className="VideoSectionContainer">
      <VideoSectionContainer className="lofiVideoSection">
        <Title >Binaural Beats Motivation</Title>
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
        ) }
      </VideoSectionContainer>
    </StyledContainer>
  );
}
