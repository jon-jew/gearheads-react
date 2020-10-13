import React, { Component, useRef, useEffect, useState } from 'react';
import * as Scroll from 'react-scroll';
import TimelinePicure from './CarPicture.js/index.js';

var Element = Scroll.Element;
var scroller = Scroll.scroller;
var scroll = Scroll.animateScroll;

var styles = {
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nissan350Z-01.jpg/1280px-Nissan350Z-01.jpg)"
};

const handleClick = () => {
  scroller.scrollTo('car-footer', {
    duration: 1500,
    smooth: true,
  })
}

const clickTest = () => {
  console.log('test');
}

function CarHeader() {
  const carfooter = useRef(null)
  
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();
  const [isScrolling, setScrolling] = useState();
  const [like, setLike] = useState(false);
  const [hover, setHover] = useState(false);

  function setScroll() {
    var page = document.getElementById("page");
    setBodyOffset(page.getBoundingClientRect());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    var temp = lastScrollTop != -bodyOffset.top;
    setScrolling(temp);
    setLastScrollTop(-bodyOffset.top);
  }

  function likeClick() {
    setLike(!like);
  }

  function likeHover() {
    setHover(!hover);
  }

  function scrollPromise() {
    return new Promise((resolve, reject) => {
      scroller.scrollTo('car-footer', {
        duration: 1500,
        smooth: true,
      })
      
      setTimeout(() => resolve(), 3000);
    })
  }

  const listener = e => {
    console.log('1');
    setScroll();
    if (scrollY === 0 && scrollDirection === 'up') {
      var promise = scrollPromise();
      promise.then((successMessage) => {
        console.log('promise  resolved');
        console.log('2');
        setScroll();
      })
    }
    //console.log(scrollY + '/' + carfooter.current.offsetTop);
    // var page = document.getElementById("page");
    // var footer = document.getElementById("123");

    // if (footer.getBoundingClientRect().top > 80 && scrollDirection === 'down') {
    //   console.log('hit');
    //   scroll.scrollTo(0);
    // }
    else {
      console.log('scrolling...');
      setScroll();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return(
    <div className = "car-header" id="page">
      <div className = "header-photo-container" style = {styles}>
        <div className = "car-header-overlay">
            <div className = "car-header-year">1988</div>
            <div className = "car-header-model">MITSUBISHI STARION</div>
            <div className = "car-header-user"><i className="fas fa-user"></i> Speedy Speed Boi</div><br/>
            <a className = "down-button" onClick={handleClick}>
              <i class="fas fa-chevron-circle-down"></i>
            </a>
        </div>
      </div>
      <Element name="car-footer" className = "car-footer">
        <div ref={carfooter} className = "left-footer" id = '123'>
          <div className = "left-header">
            {like || hover
              ? 
                <div className = "like-button" onMouseEnter={likeHover} onMouseLeave={likeHover} onClick={likeClick}>
                  <i class="fas fa-heart heart-color"></i> 1224
                </div>
              : 
                <div className = "like-button" onMouseEnter={likeHover} onMouseLeave={likeHover} onClick={likeClick}>
                  <i class="fas fa-heart"></i> 1223
                </div>
            }
            <span className = "footer-user"><i className="fas fa-user"></i> Speedy Speed Boi's<br/></span>
            1988<br/>
            <strong>MITSUBISHI</strong>
            <br/>STARION ESI-R
          </div>
          <table>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
            </tr>
          </table>
          End of Year (2018) Update:
Unfortunately 2018 wasn't the year I was hoping for with the car.  I made a lot of really great but huge changes in my life, which meant automotively things took a back seat.  At the second Autocross event of the year that I attended in May the clutch disk welded itself to the flywheel and rendered the transmission useless.  It happened on the launch and ended with a great group of fellow racers pushing the car up on the trailer.  Since every other part of my life was insanely busy that meant that the WRX didn't get back on the road till July, and after that I was a little gun shy so we just used the car as a cruiser for the rest of the year.  But no sweat, things at home have calmed down and 2019 is looking like it will be another good year!  New coilovers, new brakes, and a couple TLC items are all on the docket for the year which will put the car in its best place yet! Stay tuned!

Here is my 2006 Subaru Impreza WRX TR.  I have owned this car since July of 2010 and it is absolutely my baby.  I pinched pennies to be able to afford it while I was in college.  I modified it a little here and there throughout school, but it wasn't until after I graduated and started making money that it got to where it is today.   It's entire suspension has been rebuilt from the ground up, down to the wheel bearings and dust shields. It has about every Whiteline, Kartboy, and Turn In Concepts suspension part you could want, joined by ST Suspensions coilovers (KW V1's without the fancy stainless body) and Group N tophats. Stoptech pads, rotors, and SS brake lines are also installed. The Enkei RPF1's help it stay light on its feet, I'm addicted to those wheels and have two sets, one with street tires and another with R compounds.  The car has a built motor: sleeves, pistons, rods, valves, springs, etc etc etc.  I run a Blouch 18g-xt with the factory sized intake and an 8cm turbine housing paired to an STi intercooler.  I run 1000cc injectors, DW pump and FPR, with IAG rails.  All told the car made 345 whp and 356 wtq.  I have turned every bolt on this car myself and taken out, replaced, or repaired every system on the car at least once.  I've spent a small fortune on this thing and it really boogies.   Enjoy my hard work! 
        </div>
        <div className = "right-footer">
            <div className="timeline-header"><strong><i className="far fa-calendar"></i></strong> | <i className="fas fa-thumbtack"></i></div>
            <div className = "month">
              <div className="timeline">MAR 2020</div>
              <div className="picture-container">
                <TimelinePicure />
                <TimelinePicure />
                <TimelinePicure />
              </div><br/>
            </div>
            <div className = "month">
              <div className="timeline">MAR 2020</div>
              <div className="picture-container">
                <TimelinePicure />
                <TimelinePicure />
                <TimelinePicure />
              </div><br/>
            </div>
          
        </div>
      </Element>
    </div>
  )
};

export default CarHeader;
