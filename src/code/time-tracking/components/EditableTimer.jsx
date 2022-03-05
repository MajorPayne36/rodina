import React, { useState } from 'react';
import PropTypes from 'prop-types';
// * Local import
import TimerForm from './TimerForm';
import Timer from './Timer';

function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onRemovePress,
  onFormSubmit,
  onStartPress,
  onStopPress,
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
      onStartPress={onStartPress}
      onStopPress={onStopPress}
    />
  );
}

EditableTimer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onRemovePress: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onStartPress: PropTypes.func.isRequired,
  onStopPress: PropTypes.func.isRequired,
}

export default EditableTimer