import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props) {

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

    for (let [key, value] of Object.entries(scores)) {
        let index = 0
        for (let [key2, value2] of Object.entries(value)) {
            topic_scores[index] += value2
            index+=1
        }
    }
    
    console.log(labels, topic_scores)

    const data = {
        labels: labels,
        datasets: [
        {
            label: 'Topics Surfed',
            data: topic_scores,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
        },
        ],
    };

    return (
        <Pie data={data} />
    )
}
