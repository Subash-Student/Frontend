import { Typography, Box } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Header = () => (
  <Box textAlign="center" mt={4}>
    <Typography variant="h4" component="h1" gutterBottom color="primary">
      <TaskAltIcon fontSize="large" /> Task Planner
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Organize your tasks and boost your productivity
    </Typography>
  </Box>
);

export default Header;
