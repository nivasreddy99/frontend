 
// File: frontend/src/components/NetworkVisualizer.js
import React from 'react';

function NetworkVisualizer({ config, setConfig }) {
    const handleChange = (e) => {
        setConfig({
            ...config,
            [e.target.name]: parseInt(e.target.value)
        });
    };

    return (
        <div>
            <h2>Network Configuration</h2>
            <label>
                Input Size:
                <input 
                    type="number" 
                    name="input_size" 
                    value={config.input_size} 
                    onChange={handleChange}
                />
            </label>
            <label>
                Hidden Size:
                <input 
                    type="number" 
                    name="hidden_size" 
                    value={config.hidden_size} 
                    onChange={handleChange}
                />
            </label>
            <label>
                Output Size:
                <input 
                    type="number" 
                    name="output_size" 
                    value={config.output_size} 
                    onChange={handleChange}
                />
            </label>
        </div>
    );
}

export default NetworkVisualizer;