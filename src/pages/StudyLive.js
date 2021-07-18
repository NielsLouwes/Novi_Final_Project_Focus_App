import React, {useState, useEffect} from "react";
import axios from "axios";
import VideoCard from "../components/Video";
import {Link, Redirect} from "react-router-dom";
import "./StudyLive.css"
import {useAuth} from "../contexts/AuthContext";


export default function StudyLive() {

    const [videos,setVideos] = useState([]);
    const {currentUser, logout} = useAuth()

    useEffect(() => {
        console.log("WHAT IS VIDEOS?", videos);

        async function fetchStudyLiveVideos () {
            try {
                const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&&videoEmbeddable:true&maxResults=9&q=studywithme&key=${process.env.REACT_APP_YT_API_KEY}`)
                setVideos(response.data.items)
            } catch (e) {
                console.error(e);
            }
        }
        fetchStudyLiveVideos();
    }, []);

    if(!currentUser) {
        return <Redirect to="/signin" />
    };

    return (
        <div className="StudyLive" >
            <h2 className="StudyLive__Text">Study along with a buddy</h2>
            <div className="StudyLive__VideosSection">
                {videos ? (
                    <div className="VideosSection">
                        {videos.map((video) => {
                            return <VideoCard
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

                <h2 className="StudyLive__TextTwo">  Nobody online?  <Link style={{ textDecoration: 'none' }} to="/choose-music">Check out videos</Link></h2>
            </div>
            </div>

    );
}




