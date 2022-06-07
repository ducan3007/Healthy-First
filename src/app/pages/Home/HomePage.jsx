import React from "react";
import useAuthorize from "../../../hooks/useAuthorize";
import { Divider } from "@material-ui/core";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "THỐNG KÊ CHỨNG CHỈ CẤP / THU HỒI",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Chứng chỉ cấp mới",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#39cc3f",
    },
    {
      label: "Chứng chỉ thu hồi",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#f26957",
    },
  ],
};

const HomePage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  return !loading ? (
    <div>
      <p>THỐNG KÊ</p>
      <Divider />
      <div style={{ width: "85%", margin: "0 auto" }}>
        <Bar options={options} data={data} />;
      </div>
    </div>
  ) : null;
};

export default HomePage;
