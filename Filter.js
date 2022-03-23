import React from 'react';
import "./Filter.css";

function Filter() {
  return (
    <div className='filter d__flex align__items__center'>
        <div className="single__filter">
            <span className="filter__items active pointer">
                All
            </span>
        </div>
        <div className="single__filter">
            <span className="filter__items pointer">
                Comedy
            </span>
        </div>
        <div className="single__filter">
            <span className="filter__items pointer">
               Music
            </span>
        </div>
         <div className="single__filter">
            <span className="filter__items pointer">
               React
            </span>
        </div>
        <div className="single__filter">
            <span className="filter__items pointer">
               Anime
            </span>
        </div>
        <div className="single__filter">
            <span className="filter__items pointer">
              Videos
            </span>
        </div>
        <div className="single__filter">
            <span className="filter__items pointer">
               Tourism
            </span>
        </div>
        <div className="single__filter">
            <span className="filter__items pointer">
               Series
            </span>
        </div>
        <div className="single__filter">
            <span className="filter__items pointer">
              Reviews
            </span>
        </div>
    </div>
  )
}

export default Filter