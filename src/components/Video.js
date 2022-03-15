import React  from "react";
import "./Video.css"
import YoutubeEmbed from "./YoutubeEmbed";

export default function VideoCard(props) {

    const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
    const embedURL = `${BASE_EMBED_URL} ${props.id}`;

    return (
        <div className="videoCard">
            <div className="videoCard__info">
                <YoutubeEmbed  className="video-player" src={embedURL}  embedId={props.id} />
                <div className="videoCard__description">
                    <h4 >{props.title}</h4>
                    <p>{props.channel}</p>
                    <p>{props.views}</p>
                </div>
            </div>
        </div>
    );
}



