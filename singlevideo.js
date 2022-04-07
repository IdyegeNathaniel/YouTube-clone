import React from 'react';
import { Link } from 'react-router-dom';

function singlevideo({id, thumb__img, profile__img, title, channel__name, views, timestamps,videos__duration}) {
  return (
    <div className='col__4'>
        <Link to="/watch/:id">
        <div className="thumbnail__img relative">
            <img src={thumb__img} alt="thumbnail" className="thumb__img pointer" 
            style={{"width":"100%"}}
            />
            <span className="video__duration absolute">
                {videos__duration}
            </span>
            <div className="description__option d__flex ">
                <div className="profile__img">
                    <img src={profile__img} alt="user"  className='channel__img pointer'
                    style={{"width":"100%"}}
                    />
                </div>
               <div className="title d__flex justify__content__center align__items__center">
                   <span className="title">
                       {title}
                   </span>
               </div>
            </div>
            <div className="time__options d__flex ">
                <span className="channel__name">
                    {channel__name}
                </span>
                <div className="time__description">
                    <span className="views">
                        {views}
                    </span>
                    <span className="timestamp">
                        {timestamps}
                    </span>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default singlevideo;
