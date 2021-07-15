import React, {useState, useEffect} from "react";
import "./LOFIChill.css"
import VideoCard from "../components/Video";
import axios from "axios";

const apiKey = "AIzaSyDZT_Ag1h4M83qwW-WZvyCR_MBrBJzdPvM";

export default function LOFIChill() {
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        async function fetchLofiChill () {
            try {
                const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&type=video&q=lofi%20chill&key=${apiKey}`)
                console.log(response.data.items)
                setVideos(response.data.items)
            } catch (e) {
                console.error(e);
            }
        }
        fetchLofiChill();
    }, [videos]);

    return (
        <div className="VideoSectionContainer">
            <h2 className="VideoSection__Title">LOFI Chill</h2>
            <div className="lofiVideoSection">
                {videos ? (
                    <div>
                        {videos.map((video) => {
                            return <VideoCard
                               //insert ID props with correct location in JSON file

                                title={video.snippet.title}
                                thumbnail={video.snippet.thumbnails.default.url}
                                channel={video.snippet.channelTitle}
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
