import React from "react";
import "./SidebarRow.css"



export default function SidebarRow(props) {


    return (
        <div className="sidebarRow">
            <h2 className="sidebarRow__genre">{props.genre}</h2>
            <p className="sidebarRow__title">{props.title}</p>
        </div>
    );
}