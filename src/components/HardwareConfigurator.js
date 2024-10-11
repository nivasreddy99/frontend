 
// File: frontend/src/components/HardwareConfigurator.js
import React from 'react';

function HardwareConfigurator({ config, setConfig }) {
    const handleChange = (e) => {
        setConfig({
            ...config,
            [e.target.name]: parseInt(e.target.value)
        });
    };

    return (
        <div>
            <h2>Hardware Configuration</h2>
            <label>
                CPU Cores:
                <input 
                    type="number" 
                    name="cpu_cores" 
                    value={config.cpu_cores} 
                    onChange={handleChange}
                />
            </label>
            <label>
                RAM (GB):
                <input 
                    type="number" 
                    name="ram_gb" 
                    value={config.ram_gb} 
                    onChange={handleChange}
                />
            </label>
            <label>
                GPU Cores:
                <input 
                    type="number" 
                    name="gpu_cores" 
                    value={config.gpu_cores} 
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

export default HardwareConfigurator;