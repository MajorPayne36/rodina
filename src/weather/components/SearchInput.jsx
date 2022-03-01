import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default function SearchInput(props) {
    const [text, settext] = useState('');
    const handleChangeText = (text) => {
        settext(text);
    };

    const handleSubmitEditing = () => {
        if(!text) return;

        props.onSubmit(text);
        settext('');

    };

    return (
        <View style={styles.container}>

            <TextInput
                autoCorrect={false}
                placeholder={props.placeholder}
                placeholderTextColor='#ccc'
                underlineColorAndroid='transparent'
                style={styles.textInput}
                clearButtonMode='always'
                onChangeText={handleChangeText}
                onSubmitEditing={handleSubmitEditing}
                value={text}
            />
        </View>
    );
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
    placeholder: '',
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white',
    },
})