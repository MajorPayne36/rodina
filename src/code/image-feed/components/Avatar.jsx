import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';


const Avatar = ({
    size,
    initials,
    backgroundColor,
}) => {
    const background = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
    }

    return (
        <View style={[styles.container, background]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    )
}

Avatar.propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

export default Avatar

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: 'white',
    }
})