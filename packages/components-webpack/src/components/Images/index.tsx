import React, { ReactElement } from 'react';
import styled from 'styled-components';
import gameControllerJpg from '@/assets/images/game-controller.jpg';
import gameControllerPng from '@/assets/images/game-controller.png';
import spinnerGif from '@/assets/images/spinner.gif';
import Spinner from '@/assets/images/spinner.svg';

const Wrapper = styled.div`
  bordr: 1px solid black;
`;

const Images = (): ReactElement => (
  <Wrapper>
    <img src={gameControllerPng} alt="gameControllerPng" />
    <img src={gameControllerJpg} alt="gameControllerJpg" />
    <img src={spinnerGif} alt="spinnerGif" />
    <Spinner />
  </Wrapper>
);

export default Images;
