import React, { useState } from 'react';
const ItemsPerPageControl = ({ handleItemsPerPage }) => {
    const [number, setNumber] = useState(10);
    handleItemsPerPage(number)

    return (
        <>
            <div className="dropdown-wrapper">
                <label htmlFor="itemsPerPage" className="dropdown-label">Wyniki na stronie:</label>
                <div className="dropdown">
                    <select
                        id="itemsPerPage"
                        defaultValue="10"
                        onChange={e => setNumber(e.target.value * 1)}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </>

    );
}

export default ItemsPerPageControl;