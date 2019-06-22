import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import { Button } from './Button';

storiesOf('Button', module)
.addWithJSX('with background', () => (
  <Button bg="palegoldenrod">Hello world</Button>
))
.addWithJSX('with background 2', () => (
  <Button bg={text('bg', 'lightgreen')}>Hello world 2</Button>
));
