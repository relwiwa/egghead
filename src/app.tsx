import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CheckboxWithLabel from './checkboxWithLabel';
import Counter from './counter';
import Message from './message';

ReactDOM.render(
  <React.Fragment>
    <Message message="Hello world again" />
    <Counter message="Click to increment" />
    <CheckboxWithLabel
      labelOn="on"
      labelOff="off"
    />
  </React.Fragment>,
  document.getElementById('root')
);
