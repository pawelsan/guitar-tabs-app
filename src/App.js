import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Items from './components/Items';
import Form from './components/Form';
import Pagination from './components/Pagination';
import ItemsPerPageControl from './components/ItemsPerPageControl';
import axios from 'axios';
import './App.css';

const App = () => {
    const [query, setQuery] = useState({ value: '', option: '' });
    const handleQuery = (query) => {
        setQuery(query)
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [allItems, setAllItems] = useState('Start');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const handleItemsPerPage = (number) => {
        setItemsPerPage(number);
        // changing the current page to 1 when, after changing items per page, the previous current page was beyond the scope of refreshed pagination
        if (currentPage > Math.ceil(allItems.length / number)) {
            setCurrentPage(1)
        }
    };

    useEffect(() => {
        const fetchApiData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`https://www.songsterr.com/a/ra/songs.json?pattern=${query.value}`);
                // the ternary operator triggers filtering data if the options of tabs were selected
                setAllItems(query.option ? res.data.filter(item => item.tabTypes.includes(query.option)) : res.data);
                setLoading(false);
                // reseting the pagination page after receiving new request
                setCurrentPage(1);
            } catch (error) {
                setError(error)
            }
        }
        // Condition for fetching data only after the form was submitted
        if (query.value) {
            fetchApiData();

        }
    }, [query]);

    // Implementing pagination
    // Get the indices of displayed items on a given page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // The given set of currentItems are passed to the Items component depending on the pageNumber
    const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    // looping to find out how many pages in the pagination we need, numbers rounded up with Math.ceil
    for (let i = 1; i <= Math.ceil(allItems.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    };

    // Change page function; the page number attribute is the number in the Pagination component 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="App">
            <div className="container">
                <div className="header">
                    <Title />
                    <Form
                        addQuery={handleQuery}
                    />
                </div>
                <div className="main">
                    {pageNumbers.length > 1 && !error && !loading ?
                        <ItemsPerPageControl
                            itemsPerPage={handleItemsPerPage}
                        />
                        : null
                    }
                    <Items
                        currentItems={currentItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        allItems={allItems}
                        loading={loading}
                        error={error}
                    />
                    {/* the if statement implemented to prevent pagination from appearing if the number of items is less than the number of items per page
            the error taken into thi conditions to awoid a bug where the previous pagination remained visible while new query returned error */}
                    {pageNumbers.length > 1 && !error && !loading ?
                        <Pagination
                            paginate={paginate}
                            pageNumbers={pageNumbers}
                            currentPage={currentPage}
                        />
                        : null
                    }
                </div>
            </div>
            <div className="footer">Paweł Hińcza &copy;2020</div>
        </div>
    );
}

export default App;
