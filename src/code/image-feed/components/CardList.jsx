import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

// * Local imports
import { getImageFromId } from '../utils/api';
import Card from './Card';


const CardList = ({
    items,
}) => {

    // * ------------------- Functions ------------------- * 

    const keyExtractor=({ id }) => id.toString();

    const renderItem = ({ item: { id, author } }) => (
        <Card
            fullname={author}
            image={{
                uri: getImageFromId(id),
            }}
        />
    );

    return (
        <FlatList 
            data={items}
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
}

export default CardList;

const styles = StyleSheet.create({})