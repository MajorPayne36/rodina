import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

// * Local imports
import { getImageFromId } from '../utils/api';
import Card from './Card';


const CardList = ({
    items,
    commentsForItem,
    onPressComments,
}) => {

    // * ------------------- Functions ------------------- * 

    const keyExtractor = ({ id }) => id.toString();

    const renderItem = ({ item: { id, author } }) => {
        const comments = commentsForItem[id];

        return <Card
            fullname={author}
            image={{
                uri: getImageFromId(id),
            }}
            linkText={`${comments ? comments.length : 0} Comments`}
            onPressLinkText={() => onPressComments(id)}
        />
    };

    return (
        <FlatList
            data={items}
            extraData={commentsForItem}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}

CardList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            author: PropTypes.string.isRequired,
        }),
    ).isRequired,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments: PropTypes.func.isRequired,
}

export default CardList;

const styles = StyleSheet.create({})