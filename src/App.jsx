import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);

  

  const handleTaskCreated = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom mt={4}>
        🗓 Task Planner
      </Typography>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} />
    </Container>
  );
}

export default App;
