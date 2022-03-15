import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { React, useState } from 'react';
import PropTypes from 'prop-types';

// * Local imports
import AuthorRow from './AuthorRow';


const Card = ({
    fullname,
    image,
    linkText,
    onPressLinkText, }
) => {
    const [loading, setLoading] = useState(true);

    // * ------------------- Functions ------------------- * 
    const handleLoad = () => {
        setLoading(false);
    }

    return (
        <View>
            <AuthorRow
                fullname={fullname}
                linkText={linkText}
                onPressLinkText={onPressLinkText}
            />
            <View style={styles.image}>
                {loading && (
                    <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
                )}
                <Image style={StyleSheet.absoluteFill} source={image} onLoad={handleLoad} />
            </View>
        </View>
    )
}

Card.propTypes = {
    fullname: PropTypes.string.isRequired,
    // image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
}

Card.defaultProps = {
    linkText: '',
    onPressLinkText: () => { },
}

export default Card;

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0,0,0,0.02)',
    }
})