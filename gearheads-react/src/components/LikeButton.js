import React from 'react';

class LikeButton extends React.Component{
  render(){
    return(
      <div>
      <div class = "top-buttons">
        <div class = "like-button">
          <i class="fas fa-heart"></i> 1222
        </div>

        <div class = "follow-button">
          Follow Me!
        </div>
      </div>
      </div>

    )
  }
}

export default LikeButton;
