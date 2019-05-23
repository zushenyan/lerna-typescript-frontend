import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import Images from './index';

storiesOf('Images', module).add(
  'initial props',
  (): ReactElement => <Images />,
);
