import * as React from 'react';

type MessageProps = { message: string };

const Message: React.SFC<MessageProps> = ({ message }) => (
  <div>{message}</div>
);

export default Message;
