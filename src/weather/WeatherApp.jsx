import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, ActivityIndicator, KeyboardAvoidingView, ImageBackground, View, StatusBar } from 'react-native';
import { fetchLocationId, fetchWeather } from './utils/weatherAPI';
import SearchInput from './components/SearchInput';

import getImageForWeather from './utils/getImageForWeather';

export default function WeatherApp() {
    const [location, setlocation] = useState('');
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [temperature, settemperature] = useState(0);
    const [weather, setweather] = useState('');

    useEffect(() => {
        handleUpdateLocation('Moscow');
        return () => {
            second
        }
    }, [])


    const handleUpdateLocation = async city => {
        if (!city) return;

        setloading(true);

        try {
            const locationId = await fetchLocationId(city);
            const { location, weather, temperature } = await fetchWeather(locationId);

            setloading(false);
            seterror(false);
            setlocation(location);
            setweather(weather);
            settemperature(temperature);
        } catch (e) {
            setloading(false);
            seterror(true);
        }

    }

    const renderInfo = () => {
        return <View>
            <Text style={[styles.largeText, styles.textStyle]} >{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
            <Text style={[styles.largeText, styles.textStyle]}>{`${Math.round(temperature)}°`}</Text>
        </View>
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <StatusBar barStyle='light-content' />
            <ImageBackground
                source={getImageForWeather(weather)}
                style={styles.imageContainer}
                imageStyle={styles.image}
            >
                <View style={styles.detailsContainer}>

                    <ActivityIndicator animating={loading} color='white' size='large' />

                    {!loading && (
                        <View>
                            {error && (
                                <Text style={[styles.smallText, styles.textStyle]}>
                                    Could not load weather, please try a different city.
                                </Text>
                            )}

                            {!error && renderInfo()}
                        </View>
                    )}


                    <SearchInput placeholder='Search any city' onSubmit={handleUpdateLocation} />
                </View>


            </ImageBackground>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        ...Platform.select({
            ios: {
                fontFamily: 'AvenirNext-Regular',
            },
            android: {
                fontFamily: 'Georgia',
            },
            web: {
                fontFamily: 'Roboto',
            }
        }),
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },
});
