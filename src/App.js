import React, { useState, useEffect } from 'react';
import Items from './components/Items';
import Form from './components/Form';
import axios from 'axios';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const addQuery = query => {
    setQuery(query)
  }
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      const res = await axios.get(`https://www.songsterr.com/a/ra/songs.json?pattern=${query}`);
      setItems(res.data);
      setLoading(false);
    }
    fetchApiData();
  }, [query]);
  console.log(items)
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
