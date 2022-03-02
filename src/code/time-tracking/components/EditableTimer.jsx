import React, { useState } from 'react'

// * Local import
import TimerForm from './TimerForm';
import Timer from './Timer';

function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
}) {
  const [editFormOpen, seteditFormOpen] = useState(false);
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