import React, { useState } from 'react';

const Form = ({ addQuery }) => {
    const [value, setValue] = useState('');
    const [option, setOption] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        // passing two elements to the query object
        addQuery({ value, option });
        console.log(option)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameOrTitle">Wpisz nazwisko artysty lub tytuł piosenki</label>
            <input id="nameOrTitle"
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)} />
            <label htmlFor="tabTypes">Wybierz tabulaturę:</label>
            <select id="tabTypes"
                option={option}
                onChange={e => setOption(e.target.value)}
            >
                <option value="">Każda</option>
                <option value="TEXT_BASS_TAB">Bass</option>
                <option value="CHORDS">Chords</option>
                <option value="TEXT_GUITAR_TAB">Guitar</option>
                <option value="PLAYER">Player</option>
            </select>
            <input type="submit" value="Search" />
        </form>
    );
}

export default Form;