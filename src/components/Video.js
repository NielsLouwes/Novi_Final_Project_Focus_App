import React  from "react";
import "./Video.css"
import YoutubeEmbed from "./YoutubeEmbed";

export default function VideoCard({id, title, channel, views}) {

    const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
    const embedURL = `${BASE_EMBED_URL} ${id}`;

    return (
        <div className="videoCard">
            <div className="videoCard__info">
                <YoutubeEmbed  className="video-player" src={embedURL}  embedId={id} />
                <div className="videoCard__description">
                    <h4 >{title}</h4>
                    <p>{channel}</p>
                    <p>{views}</p>
                </div>
            </div>
        </div>
    );
}



