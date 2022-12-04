import React from "react";
import VideoCard from "../components/Video";
import useFetch from "../components/useFetch";
import {
  StyledContainer,
  VideoSectionContainer,
  VideoSection,
  Title,
} from "../components/Styling/videoSectionGlobalStyle";

export default function BinauralBeatsFocus({genre, title}) {
  const { data, error } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=${genre}&key=${process.env.REACT_APP_YT_API_KEY}`
  );

  if (error) console.log(error);

  return (
    <StyledContainer>
      <VideoSectionContainer className="lofiVideoSection">
         <Title >{title}</Title>
        {data && (
          <VideoSection>
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
