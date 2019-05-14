import React, { ReactElement } from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props): ReactElement => (
  <button onClick={onClick}>{text}</button>
);

export default Button;
