import React, { useState } from 'react';

const Form = ({ addQuery }) => {
    const [value, setValue] = useState('');
    const [option, setOption] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        // passing two elements to the query object
        addQuery({ value, option });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {/* <label htmlFor="nameOrTitle">Wpisz wykonawcę lub utwór</label> */}
            <input id="nameOrTitle"
                type="text"
                placeholder="Wykonawca lub utwór"
                // value={value}
                onChange={e => setValue(e.target.value)} />
            <div className="controls">
                <div className="dropdown-wrapper">
                    <label htmlFor="tabTypes" className="dropdown-label">Wybierz tabulaturę:</label>
                    <div className="dropdown">
                        <select id="tabTypes"
                            // option={option}
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
    );
}

export default Form;