import React, { useEffect, useState } from 'react';
import icon_fire from './assets/img/Icon awesome-fire.svg';
import icon_mountain from './assets/img/Icon awesome-mountain.svg';
import icon_thermometer from './assets/img/Icon ionic-ios-thermometer.svg';
import icon_bike from './assets/img/Icon metro-directions-bike.svg';
import pink_button from './assets/img/Rectangle 207.svg';
import yellow_button from './assets/img/Rectangle 137.svg';
import green_button from './assets/img/Rectangle 136.svg';
import blue_button from './assets/img/Rectangle 135.svg';
import './button.css';

export default function Button() {
  const [iconArray, setIconArray] = useState([]);
  const [colorArray, setColorArray] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState();
  const [selectedColor, setSelectedColor] = useState();
  
  useEffect(() => {
 
    setIconArray([
      {name: "fire", iconSrc: icon_fire},
      {name: "mountain", iconSrc: icon_mountain},
      {name: "thermometer", iconSrc: icon_thermometer},
      {name: "bike", iconSrc: icon_bike}
    ]);
    setColorArray([
      {name: "pink", colorSrc: pink_button},
      {name: "yellow", colorSrc: yellow_button},
      {name: "green", colorSrc: green_button},
      {name: "blue", colorSrc: blue_button}
    ]);
    setSelectedIcon(icon_fire);
    setSelectedColor(pink_button);
  }, [])

  return (
    <div className="container">
      <div className="icon">
        {
          iconArray.map((icon, index) => {
            return (
              <button onClick={() => {setSelectedIcon(icon.iconSrc)}} key={"icon" + index}>{icon.name}</button>
            )
          })
        }
      </div>
      <div className="color">
        {
          colorArray.map((color, index) => {
            return (
              <button onClick={() => {setSelectedColor(color.colorSrc)}} key={"color" + index}>{color.name}</button>
            )
          })
        }
      </div>
      <div className="icon_and_color">
        <img src={selectedIcon} alt="icon"/>
        <img src={selectedColor} alt="color"/>
      </div>
    </div>
  )
}