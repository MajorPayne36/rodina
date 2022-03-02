import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// * Import local components
import TimerForm from './TimerForm'
import TimerButton from './TimerButton'


const ToggleableTimerForm = ({isOpen}) => {
  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? <TimerForm /> : <TimerButton title='+' color='black' />}
    </View>
  )
}

export default ToggleableTimerForm

const styles = StyleSheet.create({
  container:{
    paddingVertical: 10,
  },

  buttonPadding:{
    paddingHorizontal: 15,
  },

})