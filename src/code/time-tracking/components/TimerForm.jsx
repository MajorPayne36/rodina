import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// * Import local components
import TimerButton from './TimerButton';

const TimerForm = ({
    id,
    title,
    project,
    onFormClose,
    onFormSubmit,
}) => {
    const submitText = id ? 'Update' : 'Create';
    const [titles, settitle] = useState(id ? title : '');
    const [projects, setproject] = useState(id ? project : '');

    const handleSubmit = () => {
        onFormSubmit({
            id,
            title: titles,
            project: projects,
        });
    }

    return (
        <View style={styles.formContainer}>

            <View style={styles.attributeContainer} >
                <Text style={styles.textInputTitle}>{titles}</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder='Input Title name'
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        onChangeText={settitle}
                        value={titles}
                    />
                </View>
            </View>

            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>{projects}</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        placeholder='Input Project name'
                        style={styles.textInput}
                        underlineColorAndroid='transparent'
                        onChangeText={setproject}
                        value={projects}
                    />
                </View>
            </View>

            <View style={styles.buttonGroup}>
                <TimerButton small color='#21BA45' title={submitText} onPress={handleSubmit} />
                <TimerButton small color='#DB2828' title='Cancel' onPress={onFormClose} />
            </View>
        </View>
    )
}

TimerForm.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    project: PropTypes.string,
    onFormClose: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
}

TimerForm.defaultProps = {
    id: null,
    title: '',
    project: ''
}

export default TimerForm

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },

    attributeContainer: {
        marginVertical: 8,
    },

    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 5,
    },

    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },

    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    // TODO: Тестить кнопки и justifyContent
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})