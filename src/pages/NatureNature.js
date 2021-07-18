import React, {useState, useEffect} from "react";
import "./NatureNature.css"
import VideoCard from "../components/Video";
import axios from "axios";

export default function NatureSoundsNature() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchNatureSoundsNature () {
            try {
                const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable:true&maxResults=6&order=relevance&q=naturesounds&key=${process.env.REACT_APP_YT_API_KEY}`)
                setVideos(response.data.items)
            } catch (e) {
                console.error(e);
            }
        }
        fetchNatureSoundsNature();
    }, []);

    return (
        <div className="VideoSectionContainer">
            <h2 className="VideoSection__Title">Nature Sounds</h2>
            <div className="lofiVideoSection">
                {videos ? (
                    <div className="VideosSection">
                        {videos.map((video) => {
                            return <VideoCard
                                //insert ID props with correct location in JSON file
                                id={video.id.videoId}
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