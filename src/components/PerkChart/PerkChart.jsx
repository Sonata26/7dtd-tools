import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Combat Strength", "Utility", "Stealth", "Defensive", "Offensive"],
  datasets: [
    {
      label: "Distribution",
      data: [5, 8, 0, 2, 2],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
  ],
};

export const options = {
  scales: {
    r: {
      suggestedMin: 1,
      suggestedMax: 10,
    },
  },
};

export function PerkChart() {
  return <Radar options={data.options} data={data} />;
}

export default PerkChart;
