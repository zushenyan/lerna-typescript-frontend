import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: Props) => (
  <button onClick={onClick}>{text}</button>
);

export default Button;
