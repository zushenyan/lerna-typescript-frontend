import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
  color: string;
}

interface ContentProps {
  background: string;
}

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Title = styled.div`
  font-size: 30px;
  color: ${({ color }: TitleProps): string => color};
`;

const Content = styled.div`
  font-size: 15px;
  background: ${({ background }: ContentProps): string => background};
`;

const Layout = ({ title, children }: LayoutProps): ReactElement => (
  <div>
    <Title color="gray">{title}</Title>
    <Content background="lightblue">{children}</Content>
  </div>
);

export default Layout;
