import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import propTypes from 'prop-types';

// * Import local components
import TimerForm from './TimerForm'
import TimerButton from './TimerButton'


const ToggleableTimerForm = ({ onFormSubmit }) => {

  const [isOpen, setisOpen] = useState(false);

  const handleFormOpen = () => {
    setisOpen(true);
  }

  const handleFormClose = () => {
    setisOpen(false);
  }

  const handleFormSubmit = (timer) => {
    onFormSubmit(timer);
    setisOpen(false);
  }

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm
          onFormClose={handleFormClose}
          onFormSubmit={handleFormSubmit}
        />
      ) : (
        <TimerButton title='+' color='black' onPress={handleFormOpen} />
      )}
    </View>
  )
}

ToggleableTimerForm.propTypes = {
  onFormSubmit: propTypes.func,
};

export default ToggleableTimerForm

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  buttonPadding: {
    paddingHorizontal: 15,
  },

})