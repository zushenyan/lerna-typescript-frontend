import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import Main from './index';

storiesOf('Main', module).add('initial props', (): ReactElement => <Main />);
