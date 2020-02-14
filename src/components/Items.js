import React from 'react';

const Items = ({ items, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <p>Numer ID: {item.id}</p>
                    <ol>
                        <li>Wykonawca: {item.artist.name}</li>
                        <li>Tytuł: {item.title}</li>
                        <li>Dostępne tabulatury: <ul>{item.tabTypes.map(tabType => (
                            <li key={tabType}>{tabType}</li>
                        )
                        )}</ul></li>
                    </ol>
                </li>
            ))}
        </ul>
    );
}

export default Items;