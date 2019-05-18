import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import Layout from './index';

storiesOf('Layout', module)
  .add(
    'initial props',
    (): ReactElement => <Layout title="I am title">I am content</Layout>,
  )
  .add(
    'another case',
    (): ReactElement => (
      <Layout title="">
        <pre>fooo bar</pre>
      </Layout>
    ),
  );
