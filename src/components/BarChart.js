import React from "react";
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

export default function BarChart(props) {

    const scores = props.scores

    const labels = [] 
    const topic_scores = []

    for (let [key, value] of Object.entries(scores)) {
        for (let [key2, value2] of Object.entries(value)) {
            labels.push(key2);
            topic_scores.push(0);
        }
        break
    }

    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sites and Topic Scores',
        },
        },
    };

    const data = {
    labels,
    datasets: [
        {
        label: 'google',
        data: [10,20,30],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'youtube',
        data: [20,30,40],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

    return (
        <Bar options={options} data={data} />
    )
}