import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import axios from "axios"

const TaskForm = ({ onTaskCreated }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Low Priority',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title) return;

    try {
      const res = await axios.post('http://localhost:5000/api/add-task', task);
      onTaskCreated(res.data);
      setTask({ title: '', description: '', priority: 'Low Priority' });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <Paper sx={{ padding: 3, marginTop: 4 }}>
      <Typography variant="h6" gutterBottom>
        Add New Task
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
        <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          multiline
          required
          rows={2}
        />
        <TextField
          select
          label="Priority"
          name="priority"
          value={task.priority}
          required
          onChange={handleChange}
        >
          <MenuItem value="Low Priority">Low Priority</MenuItem>
          <MenuItem value="Medium Priority">Medium Priority</MenuItem>
          <MenuItem value="High Priority">High Priority</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" type="submit">
          Add Task
        </Button>
      </Box>
    </Paper>
  );
};

export default TaskForm;
