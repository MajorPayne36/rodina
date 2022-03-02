import React from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';


function TimeTrackingApp() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Timers</Text>
            </View>
            <ScrollView style={styles.timerList}>
                <ToggleableTimerForm />
                <EditableTimer
                    id='1'
                    title='Mow the lawn'
                    project='House Chores'
                    elapsed='8986300'
                    isRunning
                />
                <EditableTimer
                    id='2'
                    title='Bake squash'
                    project='Kitchen Chores'
                    elapsed='3890985'
                    editFormOpen
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer:{

    },

    titleContainer:{

    },

    title:{

    },
    
    timerList:{

    },
})
export default TimeTrackingApp