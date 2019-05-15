import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './index';

storiesOf('Button', module).add(
  'with text',
  (): ReactElement => <Button onClick={action('clicked')}>aaa</Button>,
);
