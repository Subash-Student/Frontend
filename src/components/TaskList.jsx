import { Box, Typography } from "@mui/material";
import TaskItem from "./TaskItem";
import NoTaskYet from "./NoTaskYet";

const TaskList = ({ tasks, onDelete, onUpdate }) => (
  <Box mt={4} maxWidth="600px" mx="auto">
    <Typography variant="h6" gutterBottom>Pending Tasks ({tasks.length})</Typography>
    {tasks.map.length > 0 ? tasks.map(task => (
      <TaskItem key={task.id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
    )) : <NoTaskYet />}
  </Box>
);

export default TaskList;
