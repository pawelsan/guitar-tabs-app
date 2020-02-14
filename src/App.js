import React, { useState, useEffect } from 'react';
import Items from './components/Items';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      const res = await axios.get('https://www.songsterr.com/a/ra/songs.json?pattern=Marley');
      setItems(res.data);
      setLoading(false);
    }
    fetchApiData();
    // the empty set of square brackets below mimick the componentDidMount lifecycle method
  }, []);
  console.log(items)
  return (
    <div className="App">
      {/* <Search /> */}
      <Items
        items={items}
        loading={loading}
      />
    </div>
  );
}

export default App;
