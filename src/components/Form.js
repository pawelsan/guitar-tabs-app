import React, { useState } from 'react';
import ItemsPerPageControl from './ItemsPerPageControl';

const Form = ({ addQuery, handleItemsPerPage, pageNumbers, currentPage, allItems, itemsPerPage, error, loading }) => {
    const [value, setValue] = useState('');
    const [option, setOption] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        // passing two elements to the query object
        addQuery({ value, option });
    }

    return (
        <div className="controls-wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <input id="nameOrTitle"
                    type="text"
                    placeholder="Wykonawca lub utwór"
                    onChange={e => setValue(e.target.value)} />
                <div className="form-controls">
                    <div className="dropdown-wrapper">
                        <label htmlFor="tabTypes" className="dropdown-label">Wybierz tabulaturę:</label>
                        <div className="dropdown">
                            <select id="tabTypes"
                                onChange={e => setOption(e.target.value)}
                            >
                                <option value="">Każda</option>
                                <option value="TEXT_BASS_TAB">Bass</option>
                                <option value="CHORDS">Chords</option>
                                <option value="TEXT_GUITAR_TAB">Guitar</option>
                                <option value="PLAYER">Player</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="submit"><i className="fas fa-search"></i></button>
                </div>
            </form>
            {/* ternary statement below makes the pagination controls show only when needed */}
            {allItems !== "Start" && allItems.length !== 0 && !loading ?
                <div className="pagination-controls">
                    <ItemsPerPageControl
                        handleItemsPerPage={handleItemsPerPage}
                    />
                    <div className="pagination-controls-feedback">
                        <p>Wyników:&nbsp;{allItems.length}</p>
                        <p>Strona {currentPage} z {Math.ceil(allItems.length / itemsPerPage)}</p>
                    </div>
                </div>
                : null
            }
        </div>
    );
}

export default Form;