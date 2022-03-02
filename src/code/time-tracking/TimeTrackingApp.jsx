import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

// * Local imports
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import { newTimer } from './utils/TimerUtils';

function TimeTrackingApp() {
    const [timers, settimers] = useState([
        {
            title: 'Mow the lawn',
            project: 'House Chores',
            id: uuidv4(), elapsed: 5456099,
            isRunning: true,
        },
        {
            title: 'Bake squash',
            project: 'Kitten Chores',
            id: uuidv4(),
            elapsed: 1273998,
            isRunning: false,
        },
    ]);

    const handleFormSubmit = attrs => {
        settimers(timers.map(timer => {
            if (timer.id === attrs.id) {
                const { title, project } = attrs;

                return {
                    ...timer,
                    title,
                    project,
                };
            }

            return timer;
        }));
    }

    const handleCreateFormSubmit = (timer) => {
        settimers([newTimer(timer), ...timers]);
    }

    const handleRemovePress = timerId =>{
        settimers(timers.filter(timer => timer.id !== timerId));
    }

    return (
        <View style={styles.appContainer}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Timers</Text>
            </View>

            <ScrollView style={styles.timerList}>

                <ToggleableTimerForm
                    onFormSubmit={handleCreateFormSubmit}
                />

                {timers.map(({ title, project, id, elapsed, isRunning }) => (
                    <EditableTimer
                        key={id}
                        id={id}
                        title={title}
                        project={project}
                        elapsed={elapsed}
                        isRunning={isRunning}
                        onFormSubmit={handleFormSubmit}
                        onRemovePress={handleRemovePress}
                    />
                ))}

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },

    titleContainer: {
        paddingTop: 35,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    timerList: {
        paddingBottom: 15,
    },
})
export default TimeTrackingApp