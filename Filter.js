import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter d__flex align__items__center">
      <div className="single__filter">
        <span className="filter__items active pointer">All</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Comedy</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Music</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">React</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Anime</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Videos</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Tourism</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Series</span>
      </div>
      <div className="single__filter">
        <span className="filter__items pointer">Reviews</span>
      </div>
      <div className="single__filter">
        <span className="filter__items next pointer">
          <svg
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="style-scope yt-icon"
            style={{"width":"15px", "height":"15px"}}
            fill="white"
          >
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path
                d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
                class="style-scope yt-icon"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Filter;
