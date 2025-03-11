import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/items')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    return (
        <div className="App">
            <h1>Items from Node.js API</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;