import React, { ReactElement } from 'react';
import { Button, Images, Layout } from '@mypkg/components';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: lightblue;
`;

const App = (): ReactElement => (
  <Wrapper>
    <Button>aaa</Button>
    <Images />
    <Layout title="I am layout">
      <h1>I am children of layout</h1>
    </Layout>
  </Wrapper>
);

export default App;
