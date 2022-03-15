import { StyleSheet, Text, View, ActivityIndicator, ViewPropTypes, SafeAreaView } from 'react-native';
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// * Local imports
import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

const Feed = ({ style, onPressComments, commentsForItem }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(async () => {
        try {
            const items = await fetchImages();
            setLoading(false);
            setItems(items);
        } catch (e) {
            setLoading(false);
            setError(true);
        }

        return () => {

        }
    }, [])

    if (loading) {
        return <ActivityIndicator size='large' />
    }
    return (
        <SafeAreaView style={style}>
            <CardList
                items={items}
                commentsForItem={commentsForItem}
                onPressComments={onPressComments}
            />
        </SafeAreaView>
    )
}

Feed.propTypes = {
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
        .isRequired,
    onPressComments: PropTypes.func.isRequired,
    // style: ViewPropTypes.style,
}

Feed.defaultProps = {
    style: null,
}

export default Feed

// const styles = StyleSheet.create({})