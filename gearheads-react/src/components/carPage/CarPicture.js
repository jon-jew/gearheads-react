import React, { Component, useRef, useEffect, useState } from 'react';

function Picture() {
    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        console.log(clicked);
        setClicked(!clicked);
    }

    return(
        <div className='inlineBlock'>
            {clicked == true &&
                <div>hi there</div>
            }
            <div onClick={onClick} className = {(clicked ? 'picture-exp-large' : 'picture-exp-small')}>pp</div>
        </div>
    );
}

export default Picture;