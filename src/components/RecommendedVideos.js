import React, {useState, useEffect} from "react";
import "./RecommendedVideos.css"
import axios from 'axios'
import VideoCard from "./Video";


const apiKey = "AIzaSyDZT_Ag1h4M83qwW-WZvyCR_MBrBJzdPvM";

// YOUTUBE VIDEOS --> 480 pixels wide and 270 pixels tall

export default function RecommendedVideos() {

    const [videos, setVideos] = useState([]);

 useEffect(() => {
     console.log("WHAT IS VIDEOS?", videos);

     async function fetchPopularVideos () {
         try {
             const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=2&order=viewCount&q=lofi%20study&key=${apiKey}`)
             console.log(response.data.items)
             setVideos(response.data.items)
         } catch (e) {
             console.error(e);
         }
     }
     fetchPopularVideos();
 }, [videos]);


    return (
        <div className="recommendedVideos">
            <h2>Most Popular</h2>
            <div className="videoSectionContainer">
                {videos ? (
                    <div>
                        {videos.map((video) => {
                            return <VideoCard
                                id={video.id}
                                title={video.snippet.title}
                                channel={video.channel}
                            />
                        })}
                    </div>
                ) : (
                    <h3>Loading</h3>
                )}

            </div>
        </div>
    );
}


