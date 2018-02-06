import React from 'react';
import EventButton from '../containers/EventButton';

const Footer = () => (
  <p>
    Actions: {'   '} <EventButton eventType="RESIZE_RUNWAY_CHART" label="Resize It" />
  </p>
);

export default Footer;
