import React, {useState, useEffect} from "react";
import axios from "axios";
import VideoCard from "../components/Video";
import {Link} from "react-router-dom";

// INSTRUCTIONS
// 1. Change to API call to include video broadcasting or LIVE now (line 18-19).
//2. Need to just code it into this page and not use VIDeocard or VIDEO as the inputs might be different.


const apiKey = "AIzaSyDZT_Ag1h4M83qwW-WZvyCR_MBrBJzdPvM";

export default function StudyLive() {

    const [videos,setVideos] = useState([]);

    useEffect(() => {
        console.log("WHAT IS VIDEOS?", videos);

        async function fetchPopularVideos () {
            try {
                const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=video&videoEmbeddable:true&maxResults=2&order=viewCount&q=lofi%20study&key=${apiKey}`)
                console.log(response.data.items)
                setVideos(response.data.items)
            } catch (e) {
                console.error(e);
            }
        }
        fetchPopularVideos();
    }, []);



    return (
        <div className="VideoSectionContainer" >
            <h2>See who is studying live now.</h2>
            {videos ? (
                    <div>
                        {videos.map((video) => {
                            return <VideoCard
                                id={video.id.videoId}
                                title={video.snippet.title}
                                channel={video.channel}
                            />
                        })}
                    </div>
                ) : (
                    <h3>Loading</h3>
                )}

                <h2>Nobody online?  <Link style={{ textDecoration: 'none' }} to="/choose-music">Check out videos</Link></h2>
        </div>
    );
}




