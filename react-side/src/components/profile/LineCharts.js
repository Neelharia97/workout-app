import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Paper from "@mui/material/Paper";
import { PieChart } from "@mui/x-charts/PieChart";

import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export const WeightGraph = ({ userId }) => {
  const [weight, setWeight] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/profile/${userId}/weight`)
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.date.map((date, index) => ({
          date,
          weight: data.weight[index],
        }));

        setWeight(transformedData);
      });
  }, [userId]);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* Pie Chart with Shadow */}
      <Paper elevation={4} sx={{ p: 2, width: "35%", borderRadius: 4 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#5A4FCF", mb: 2 }}
        >
          Workout Type Distribution
        </Typography>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Cardio" },
                { id: 1, value: 20, label: "Zumba" },
                { id: 2, value: 15, label: "Cycling" },
              ],
            },
          ]}
          width={300}
          height={200}
        />
      </Paper>

      {/* Line Chart with Shadow */}
      <Paper
        elevation={4}
        sx={{ p: 2, flex: 1, borderRadius: 4, width: "65%", minWidth: "auto" }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#5A4FCF", mb: 2 }}
        >
          Weight Over Time
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={weight}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#f9f9f9",
                border: "1px solid #ccc",
                borderRadius: 10,
              }}
              labelStyle={{ color: "#5A4FCF", fontWeight: "bold" }}
            />

            <Legend verticalAlign="bottom" height={36} />

            <Line
              type="monotone"
              dataKey="weight"
              stroke="#5A4FCF"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              dot={{ r: 5, strokeWidth: 2, fill: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};
