import React, { useState } from 'react';

const Form = ({ addQuery }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addQuery(value);
        setValue('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Type an artist name or a song title</label>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)} />
            <input type="submit" value="Search" />
        </form>
    );
}

export default Form;