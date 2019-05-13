import React, { ReactElement } from 'react';
import { ReactComponent as Logo } from './logo.svg';

export interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props): ReactElement => (
  <button onClick={onClick}>
    <Logo />
  </button>
);

export default Button;
