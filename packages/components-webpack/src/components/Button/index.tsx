import React, { ReactElement } from 'react';

export interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props): ReactElement => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
