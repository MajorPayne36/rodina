import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// * Local imports
import TimerButton from './TimerButton'
import { millisecondsToHuman } from '../utils/TimerUtils';

const Timer = ({ id, title, project, elapsed, onEditPress, onRemovePress }) => {

  const elaspedString = millisecondsToHuman(elapsed);

  const handleRemovePress = () => {
    onRemovePress(id);
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
      <TimerButton color='#21BA45' title='Start' />
    </View>
  )
}

export default Timer

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
})