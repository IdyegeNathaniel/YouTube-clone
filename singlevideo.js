import React from 'react';

function singlevideo(id, thumb__img, profile__img, title, channel__name, views, timestamps) {
  return (
    <div className='col__4'>
        <div className="thumbnail__img">
            <img src={"https://i.ytimg.com/vi/hdI2bqOjy3c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2s0gfEIumVo3Q-Duq1S17FVYQfA"} alt="thumbnail" className="thumb__img pointer" 
            style={{"width":"100%"}}
            />
        </div>
        
    </div>
  )
}

export default singlevideo;