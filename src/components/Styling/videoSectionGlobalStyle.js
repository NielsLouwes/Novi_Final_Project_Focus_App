import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: white;
  height: 100%;
  flex: 0.8;
  /* border: 2px solid #9755d4; */
`;

export const Title = styled.div`
  font-size: 2rem;
  margin-left: 87px;
  font-weight: bolder;
  
`;

export const VideoSectionContainer = styled.div`
  display: flex;
  width: 100%;
   background-size: 40px 40px;
  background-image:
    linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
`;

export const VideoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 75px;
  margin-top: 15px;
`;

export const Loading = styled.span`
  margin-left: 150px;
  `