import React, { useState, useEffect } from 'react';
import Items from './components/Items';
import Form from './components/Form';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
    const [query, setQuery] = useState({ value: '', option: '' });
    const addQuery = (query) => {
        setQuery(query)
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [items, setItems] = useState('Start');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10)

    useEffect(() => {
        const fetchApiData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://www.songsterr.com/a/ra/songs.json?pattern=${query.value}`);
                // the ternary operator triggers filtering data if the options of tabs were selected
                setItems(query.option ? res.data.filter(item => item.tabTypes.includes(query.option)) : res.data);
                setLoading(false);
            } catch (error) {
                setError(error)
            }
        }
        // Condition for fetching data only after the form was submitted
        if (query.value) {
            fetchApiData();

        }
    }, [query.value, query.option]);

    // Implementing pagination
    // Get the indices of displayed items on a given page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // The given set of currentItems are passed to the Items component depending on the pageNumber
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Change page function; the page number attribute is the number in the Pagination component 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <Form addQuery={addQuery} />
            <Items
                items={currentItems}
                allItems={items}
                loading={loading}
                error={error}
            />
            <Pagination
                itemsPerPage={itemsPerPage}
                allItems={items.length}
                paginate={paginate}
            />
        </div>
    );
}

export default App;
