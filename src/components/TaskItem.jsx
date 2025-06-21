import { Card, CardContent, Typography, IconButton, Box, Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskItem = ({ task }) => {
  const colorMap = {
    High: 'error',
    Medium: 'warning',
    Low: 'success',
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{task.title}</Typography>
          <Chip label={task.priority} color={colorMap[task.priority]} />
        </Box>
        <Typography color="text.secondary">{task.description}</Typography>
        <Typography variant="caption" display="block" color="gray">
          Created At: {new Date(task.createdAt).toLocaleString()}
        </Typography>
        <Box mt={1}>
          <IconButton color="primary"><EditIcon /></IconButton>
          <IconButton color="error"><DeleteIcon /></IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
