import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Counter from './counter';
import Message from './message';

ReactDOM.render(
  <React.Fragment>
    <Message message="Hello world again" />
    <Counter message="Click to increment" />
  </React.Fragment>,
  document.getElementById('root')
);
