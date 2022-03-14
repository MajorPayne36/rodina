import React from 'react';
import 'react-native-get-random-values';
import ImageFeedApp from './src/code/image-feed/ImageFeedApp';

import TimeTrackingApp from './src/code/time-tracking/TimeTrackingApp'
import WeatherApp from './src/code/weather/WeatherApp';

export default function App() {
  return (
    <>
      {/* <WeatherApp /> */}
      {/* <TimeTrackingApp /> */}
      <ImageFeedApp />
    </>
  );
}