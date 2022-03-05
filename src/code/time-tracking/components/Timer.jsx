import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

// * Local imports
import TimerButton from './TimerButton'
import { millisecondsToHuman } from '../utils/TimerUtils';

const Timer = ({ id, title, project, elapsed, onEditPress, onRemovePress, onStartPress, onStopPress, isRunning }) => {

  const elaspedString = millisecondsToHuman(elapsed);

  const handleRemovePress = () => {
    onRemovePress(id);
  }

  const handleStartPress = () => {
    onStartPress(id);
  }

  const handleStopPress = () => {
    onStopPress(id);
  }

  const renderActionButton = () => {

    if (!isRunning) return (
      <TimerButton color='#21BA45' title='Start' onPress={handleStartPress} />
    ); else return (
      <TimerButton color='#DB2828' title='Stop' onPress={handleStopPress} />
    );
  }

  return (
    <View style={styles.timerContaier}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elaspedTime}>{elaspedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color='blue' small title='Edit' onPress={onEditPress} />
        <TimerButton color='blue' small title='Remove' onPress={handleRemovePress} />
      </View>
      {renderActionButton()}
    </View>
  )
}

const styles = StyleSheet.create({
  timerContaier: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  elaspedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

Timer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onRemovePress: PropTypes.func.isRequired,
  onStartPress: PropTypes.func.isRequired,
  onStopPress: PropTypes.func.isRequired,
  onEditPress: PropTypes.func.isRequired,
};

export default Timer