import React from 'react';

import './ChannelHeader.css';

const ChannelHeader = ({ room }) => (
  <div className="channelHeader">
    <div className="channelHeaderLeft">
      <h3>#{room}</h3>
    </div>
    <div className="channelHeaderRight">
      <a className="leaveGameButton" href="/">⨯</a>
    </div>
  </div>
);

export default ChannelHeader;