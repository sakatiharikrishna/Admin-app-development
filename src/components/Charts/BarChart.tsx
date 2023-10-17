import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Overview',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
        label: 'Monthly Earnings',
        data: [12, 10, 16, 13, 14, 7,14, 17, 15,13,12,14],
        backgroundColor: [
          '#f1effc',
          '#f1effc',
          '#f1effc',
          '#f1effc',
          '#f1effc',
          '#f1effc',
          '#f1effc',
          '#6a42e5',
          '#f1effc',
          '#f1effc',
          '#f1effc',
          '#f1effc',
        ],
        borderRadius:7,
        borderWidth: 1
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
