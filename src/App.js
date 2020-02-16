import React, { useState, useEffect } from 'react';
import Items from './components/Items';
import Form from './components/Form';
import axios from 'axios';
import './App.css';

const App = () => {
    const [query, setQuery] = useState({ value: '', option: '' });
    const addQuery = (query) => {
        setQuery(query)
    };
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState('Start');

    useEffect(() => {
        const fetchApiData = async () => {
            setLoading(true);
            const res = await axios.get(`https://www.songsterr.com/a/ra/songs.json?pattern=${query.value}`);
            // the ternary operator triggers filtering data if the options of tabs were selected
            setItems(query.option ? res.data.filter(item => item.tabTypes.includes(query.option)) : res.data);
            setLoading(false);
        }
        // Condition for fetching data only after the form was submitted
        if (query.value) {
            fetchApiData();

        }
    }, [query.value, query.option]);

    return (
        <div className="App">
            <Form addQuery={addQuery} />
            <Items
                items={items}
                loading={loading}
            />
        </div>
    );
}

export default App;
