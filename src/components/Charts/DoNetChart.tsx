import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["customers buys that products","products"],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19,22],
      backgroundColor: [
        '#fd2391',
        '#6a42e5',
        '#f1effc'
      ],
      borderColor: [
        '#eec3d9',
        '#7154d8',
      ],
      borderWidth: -1,
    },
  ],
};

export function DoNutChart() {
  return <Doughnut data={data} />;
}