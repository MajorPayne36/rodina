import React from 'react'
import { View } from 'react-native'

// ** Local components import
import TimerForm from './TimerForm';
import Timer from './Timer';

function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}) {
  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
      />
    );
  }
  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
}

export default EditableTimer