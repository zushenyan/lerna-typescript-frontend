import React, { ReactElement } from 'react';
import gameControllerJpg from '@/assets/images/game-controller.jpg';
import gameControllerPng from '@/assets/images/game-controller.png';
import spinnerGif from '@/assets/images/spinner.gif';
import spinnerSvg from '@/assets/images/spinner.svg';

const Images = (): ReactElement => (
  <div>
    <img src={gameControllerPng} alt="gameControllerPng" />
    <img src={gameControllerJpg} alt="gameControllerJpg" />
    <img src={spinnerGif} alt="spinnerGif" />
    <img src={spinnerSvg} alt="spinnerSvg" />
  </div>
);

export default Images;
