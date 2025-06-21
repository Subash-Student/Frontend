import { useState } from "react";
import {
  Button,
  Box,
  Modal,
  TextField,
  MenuItem,
  Typography,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const TaskForm = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Medium Priority",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTaskData({ title: "", description: "", priority: "Medium Priority" });
  };

  const handleChange = (e) => {
    setTaskData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    if (!taskData.title.trim()) return alert("Title is required");
    onAdd(taskData);
    handleClose();
  };

  return (
    <>
      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add New Task
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" mb={2}>
            Add Task
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Title"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Description"
              name="description"
              value={taskData.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
            />
            <TextField
              select
              label="Priority"
              name="priority"
              value={taskData.priority}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Low Priority">Low</MenuItem>
              <MenuItem value="Medium Priority">Medium</MenuItem>
              <MenuItem value="High Priority">High</MenuItem>
            </TextField>

            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
              <Button onClick={handleSave} variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default TaskForm;
