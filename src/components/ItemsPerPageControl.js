import React, { useState } from 'react';
const ItemsPerPageControl = ({ itemsPerPage }) => {
    const [number, setNumber] = useState(10);
    itemsPerPage(number)

    return (
        <>
            <label htmlFor="itemsPerPage">Liczba wyników na stronie:</label>
            <select id="itemsPerPage"
                onChange={e => setNumber(e.target.value * 1)}
            >
                <option value="5">5</option>
                <option value="10" selected>10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </>

    );
}

export default ItemsPerPageControl;