import React from 'react';
import 'react-native-get-random-values';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

// * Local imports
import ImageFeedApp from './src/code/image-feed/ImageFeedApp';
import TimeTrackingApp from './src/code/time-tracking/TimeTrackingApp'
import WeatherApp from './src/code/weather/WeatherApp';
import BottomNavigationComponent from './src/code/navigation/BottomNavigation';

// TODO: Добавить Tabs и навигацию по ним
export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/* <WeatherApp /> */}
      {/* <TimeTrackingApp /> */}
      {/* <ImageFeedApp /> */}
      <BottomNavigationComponent />
    </ApplicationProvider>
  );
}