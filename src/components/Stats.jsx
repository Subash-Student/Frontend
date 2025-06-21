import { Box, Paper, Typography, Grid } from "@mui/material";

const Stats = ({ total, completed, remaining }) => (
  <Grid container spacing={2} justifyContent="center" mt={2}>
    {[
      { label: "Total Tasks", value: total, color: "primary" },
      { label: "Completed", value: completed, color: "success" },
      { label: "Remaining", value: remaining, color: "warning" },
    ].map((stat, idx) => (
      <Grid item key={idx}>
        <Paper elevation={3} sx={{ p: 2, textAlign: "center", minWidth: 100 }}>
          <Typography variant="h6" color={stat.color}>{stat.value}</Typography>
          <Typography variant="body2">{stat.label}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export default Stats;
