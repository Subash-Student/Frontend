import React from 'react';
import TaskItem from './TaskItem';
import { Typography } from '@mui/material';

const TaskList = ({ tasks }) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        Pending Tasks ({tasks.length})
      </Typography>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
