import React from 'react';
import "./Video.css";
import Filter from "./Filter.js";
import Singlevideo from './singlevideo';

function Video() {
  return (
    <div className='videos'>
        <Filter />
        {/* Videos */}
        <div className="row">
            <Singlevideo
             thumb__img="https://i.ytimg.com/vi/hdI2bqOjy3c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2s0gfEIumVo3Q-Duq1S17FVYQfA"
            />
        </div>
    </div>
  )
}

export default Video;