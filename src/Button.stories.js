import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

storiesOf('Button', module)
.addWithJSX('with background', () => (
  <Button bg="palegoldenrod">Hello world</Button>
))
.addWithJSX('with background 2', () => (
  <Button bg="lightgreen">Hello world 2</Button>
));
