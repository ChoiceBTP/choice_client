import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props) {

    const scores = props.scores
    console.log("pie scores ", scores)
    const labels = [] 
    const topic_scores = []
    const label_freq = {}

    for (let [key, value] of Object.entries(scores)) {
        if(!label_freq[value]) label_freq[value] = 0
        label_freq[value] +=1
    }   

    for (let [key, value] of Object.entries(label_freq)) {
        labels.push(key)
        topic_scores.push(value)
    }
    
    console.log("pie ", labels, topic_scores)

    const data = {
        labels: labels,
        datasets: [
        {
            label: 'Topics Surfed',
            data: topic_scores,
            backgroundColor: [
                'rgba(225, 77, 42, 0.9)',
                'rgba(253, 132, 31, 0.9)',
                'rgba(62, 109, 156, 0.9)',
                'rgba(0, 18, 83, 0.9)'
            ],
            borderColor: [
                'rgba(225, 77, 42, 1)',
                'rgba(253, 132, 31, 1)',
                'rgba(62, 109, 156, 1)',
                'rgba(0, 18, 83, 1)'
            ],
            borderWidth: 1,
        },
        ],
    };

    return (
        <Pie data={data} />
    )
}
