import React from "react";
import "./SearchPage.css"
import filterLogo from "../files/filter youtube icon.jpg"

export default function SearchPage() {
    return (
        <div className="searchPage">
        <div className="searchPage__filter">
            <img src={filterLogo} alt="filter logo" height="50px" width="auto"/>
            <h2>FILTER</h2>
            <hr/>
        </div>
        </div>
    );
}