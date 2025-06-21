import { useState } from "react";
import {
  Paper,
  Typography,
  IconButton,
  Box,
  Checkbox,
  Modal,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const TaskItem = ({ task, onDelete, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({
    description: task.description,
    priority: task.priority,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    console.log(task)
    setEditData({
      title: task.title,
      description: task.description,
      priority: task.priority,
    });
  };

  const handleChange = (e) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    onUpdate(task._id, editData);
    handleClose();
  };

  return (
    <>
      <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="start" gap={1}>
            <Checkbox />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" display="flex" alignItems="center" gap={1}>
                {task.title}
                <FiberManualRecordIcon fontSize="small" sx={{ color: task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'orange' : 'green' }} />
              </Typography>
              <Typography variant="body2">{task.description}</Typography>
              <Typography variant="caption" color="text.secondary">
                Created: {task.createdAt} • {task.priority} Priority
              </Typography>
            </Box>
          </Box>
          <Box>
            <IconButton color="primary" onClick={handleOpen}><EditIcon /></IconButton>
            <IconButton color="error" onClick={() => onDelete(task._id)}><DeleteIcon /></IconButton>
          </Box>
        </Box>
      </Paper>

      {/* Edit Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>Edit Task</Typography>
          <Stack spacing={2}>
            <TextField
              label="Title"
              name="title"
              value={editData.title}
              onChange={handleChange}
              fullWidth
              multiline
              
            />
            <TextField
              label="Description"
              name="description"
              value={editData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
            <TextField
              select
              label="Priority"
              name="priority"
              value={editData.priority}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Low Priority">Low Priority</MenuItem>
              <MenuItem value="Medium Priority">Medium Priority</MenuItem>
              <MenuItem value="High Priority">High Priority</MenuItem>
            </TextField>
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
              <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default TaskItem;
