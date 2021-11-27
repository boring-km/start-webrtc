import React from 'react';

type WebVideoProps = {
  name: string;
};

const WebVideo: React.FC<WebVideoProps> = ({name}) => (
  <div>
    <h2>{name}! {name}! {name}!</h2>
  </div>
);

export default WebVideo;
