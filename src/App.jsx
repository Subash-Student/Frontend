import { useEffect, useState } from "react";
import { Container, CircularProgress } from "@mui/material";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";

const API_BASE = "http://localhost:5000/api";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all tasks
  const loadTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE}/fetch-task`);
      setTasks(response.data);
    } catch (err) {
      console.error("Failed to fetch tasks:", err);
    } finally {
      setLoading(false);
    }
  };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/delete-task/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

 
  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await axios.put(`${API_BASE}/update-task/${id}`, updatedData);
      setTasks(prev =>
        prev.map(t => (t._id === id ? res.data : t))
      );
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleAdd = async (newTaskData) => {
    try {
      const response = await axios.post(`${API_BASE}/add-task`, newTaskData);
      setTasks(prev => [response.data, ...prev]); // add to top of list
    } catch (error) {
      console.error("Failed to add task:", error);
    }
  };
  

  useEffect(() => {
    loadTasks();
  }, []);

  const completedCount = 0;
  const remainingCount = tasks.length;

  return (
    <Container maxWidth="md">
      <Header />
      <Stats total={tasks.length} completed={completedCount} remaining={remainingCount} />
      <TaskForm onAdd={handleAdd} />
      {loading ? (
        <CircularProgress sx={{ display: "block", mx: "auto", mt: 4 }} />
      ) : (
        <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />
      )}
    </Container>
  );
};

export default App;
