 
// File: frontend/src/components/PerformanceChart.js
import React from 'react';
import Plot from 'react-plotly.js';

function PerformanceChart({ data }) {
    const executionTimes = data.map(d => d.execution_time);
    const performanceScores = data.map(d => d.performance_score);

    return (
        <div>
            <h2>Performance Chart</h2>
            <Plot
                data={[
                    {
                        x: performanceScores,
                        y: executionTimes,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    }
                ]}
                layout={{
                    width: 720, 
                    height: 480, 
                    title: 'Execution Time vs Performance Score',
                    xaxis: {title: 'Performance Score'},
                    yaxis: {title: 'Execution Time (s)'}
                }}
            />
        </div>
    );
}

export default PerformanceChart;