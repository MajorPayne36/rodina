import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// * Local imports
import ImageFeedApp from '../image-feed/ImageFeedApp';
import WeatherApp from '../weather/WeatherApp';
import TimeTrackingApp from '../time-tracking/TimeTrackingApp';

const weather_icon = <Icon name='weather-cloudy' size={25} color='#900' />;
const image_feed_icon = <Icon name='image-multiple-outline' size={25} color='#900' />;
const time_tracking_icon = <Icon name='camera-timer' size={25} color='#900' />;

const BottomNavigationComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <BottomNavigation
            selectedIndex={selectedIndex}
            onSelect={i => setSelectedIndex(i)}
        >
            <BottomNavigationTab  icon={weather_icon} title='WEATHER'>
                <WeatherApp />
            </BottomNavigationTab>

            <BottomNavigationTab icon={image_feed_icon} title='IMAGE_FEED'>
                <ImageFeedApp />
            </BottomNavigationTab>

            <BottomNavigationTab icon={time_tracking_icon} title='TIME_TRACKING'>
                <TimeTrackingApp />
            </BottomNavigationTab>

        </BottomNavigation>
    )
}

export default BottomNavigationComponent

const styles = StyleSheet.create({})