 
// File: frontend/src/App.js
import React, { useState } from 'react';
import NetworkVisualizer from './components/NetworkVisualizer';
import HardwareConfigurator from './components/HardwareConfigurator';
import PerformanceChart from './components/PerformanceChart';

function App() {
    const [networkConfig, setNetworkConfig] = useState({
        input_size: 2,
        hidden_size: 3,
        output_size: 1
    });
    const [hardwareConfig, setHardwareConfig] = useState({
        cpu_cores: 4,
        ram_gb: 8,
        gpu_cores: 1000
    });
    const [performanceData, setPerformanceData] = useState([]);

    const runSimulation = async () => {
        const response = await fetch('http://localhost:5000/api/simulate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...networkConfig,
                ...hardwareConfig,
                num_iterations: 1000
            }),
        });
        const data = await response.json();
        setPerformanceData([...performanceData, data]);
    };

    return (
        <div className="App">
            <h1>ML Architecture Visualizer</h1>
            <NetworkVisualizer config={networkConfig} setConfig={setNetworkConfig} />
            <HardwareConfigurator config={hardwareConfig} setConfig={setHardwareConfig} />
            <button onClick={runSimulation}>Run Simulation</button>
            <PerformanceChart data={performanceData} />
        </div>
    );
}

export default App;