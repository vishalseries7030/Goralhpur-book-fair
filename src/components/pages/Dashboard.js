import React from "react";
import { Pie } from "react-chartjs-2";

const Dashboard = () => {
  const chartData = {
    labels: ["Users", "Books", "Speakers", "Events"],
    datasets: [
      {
        data: [200, 50, 10, 4],
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722", "#03A9F4"],
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default Dashboard;
