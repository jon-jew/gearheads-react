import React from 'react';

import CarCardGrad from './CarCard.js'
import pic from '../mr2.jpg';
import pic2 from '../download.jpg';

class CarCardContainer extends React.Component{
  render(){
    return(
      <div class = "card-container">
        <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCardGrad year={"1991"} car={"TOYOTA MR2"} pic={pic}/>
        <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCardGrad year={"1995"} car={"TOYOTA MR2"} pic={pic}/>
        <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCardGrad year={"1994"} car={"TOYOTA MR2"} pic={pic}/>
        <CarCardGrad year={"1991"} car={"TOYOTA MR2"} pic={pic}/>
        <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCardGrad year={"1995"} car={"TOYOTA MR2"} pic={pic}/>
        <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
        <CarCardGrad year={"1994"} car={"TOYOTA MR2"} pic={pic}/>  <CarCardGrad year={"1991"} car={"TOYOTA MR2"} pic={pic}/>
          <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
          <CarCardGrad year={"1995"} car={"TOYOTA MR2"} pic={pic}/>
          <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
          <CarCardGrad year={"1994"} car={"TOYOTA MR2"} pic={pic}/>  <CarCardGrad year={"1991"} car={"TOYOTA MR2"} pic={pic}/>
            <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
            <CarCardGrad year={"1995"} car={"TOYOTA MR2"} pic={pic}/>
            <CarCardGrad year={"2003"} car={"NISSAN 350Z"} pic={pic2}/>
            <CarCardGrad year={"1994"} car={"TOYOTA MR2"} pic={pic}/>
      </div>
    )
  }
}

export default CarCardContainer;
