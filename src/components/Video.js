import React  from "react";
import "./Video.css"
import YoutubeEmbed from "./YoutubeEmbed";


export default function VideoCard(props) {

    const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

    // if (!props.id) {
    //     return null
    //     }

     const embedURL = `${BASE_EMBED_URL} ${props.id}`;

    return (
        <div className="videoCard">
            {/*<img className="videoCard__thumbnail" src={props.thumbnail}   alt="thumbnail"/>*/}
            {/*Change embedId to the dynamic link that I need to find.*/}


            <div className="videoCard__info">
                <img className="videoCard__avatar" src={props.avatar} alt="avatar"/>
                <YoutubeEmbed  className="video-player" src={embedURL}  embedId="rokGy0huYEA" />
                <div className="videoCard__description">
                    <h4>{props.title}</h4>
                    <p>{props.channel}</p>
                    <p>{props.views} - {props.timestamp}</p>
                </div>

            </div>
        </div>
    );
}


// const tag  = document.createElement("script")
// const [onPlayerReady, onPlayerStateChange] = useState("")
//
// tag.src = "https://www.youtube.com/iframe_api";
// const firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// const player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '390',
//         width: '640',
//         videoId: 'M7lc1UVf-VE',
//         playerVars: {
//             'playsinline': 1
//         },
//         events: {
//             'onReady': onPlayerReady,
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }


// function onPlayerReady(event) {
//     event.target.playVideo();
// }
//
// const done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }
