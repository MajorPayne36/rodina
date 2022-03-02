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
  onFormSubmit,
  onRemovePress,
}) {

  const [editFormOpen, seteditFormOpen] = useState(false);

  const openForm = () => {
    seteditFormOpen(true);
  }

  const closeForm = () => {
    seteditFormOpen(false);
  }

  const handleEditPress = () => {
    openForm();
  }

  const handleFormClose = () => {
    closeForm();
  }

  const handleSubmit = timer => {
    onFormSubmit(timer);
    closeForm();
  }


  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onFormSubmit={handleSubmit}
        onFormClose={handleFormClose}
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
      onEditPress={handleEditPress}
      onRemovePress={onRemovePress}
    />
  );
}

export default EditableTimer