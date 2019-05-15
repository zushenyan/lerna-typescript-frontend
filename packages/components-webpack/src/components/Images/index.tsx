import React, { ReactElement } from 'react';
import gameControllerJpg from '@/assets/images/game-controller.jpg';
import gameControllerPng from '@/assets/images/game-controller.png';
import spinnerGif from '@/assets/images/spinner.gif';
import Spinner from '@/assets/images/spinner.svg';

const Images = (): ReactElement => (
  <div>
    <img src={gameControllerPng} alt="gameControllerPng" />
    <img src={gameControllerJpg} alt="gameControllerJpg" />
    <img src={spinnerGif} alt="spinnerGif" />
    <Spinner />
  </div>
);

export default Images;
