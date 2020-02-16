import React from 'react';

const Items = ({ items, loading }) => {
    if (items === 'Start') {
        return <h2>Znajdź swoją piosenkę</h2>
    }
    else if (loading) {
        return <h2>Ładowanie...</h2>
    }
    else if (items.length === 0) {
        return <h2>Brak wyników...</h2>
    }
    else {
        return (
            <>
                <p>Liczba wyników: {items.length}</p>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            <ol>
                                <li>Wykonawca: <a href={`http://www.songsterr.com/a/wa/artist?id=${item.artist.id}`}>
                                    {item.artist.name}</a></li>
                                <li>Tytuł: <a href={`http://www.songsterr.com/a/wa/song?id=${item.id}`}>{item.title}</a>
                                </li>
                                <li>Dostępne tabulatury: <ul>{item.tabTypes.map(tabType => (
                                    <li key={tabType}>{tabType}</li>
                                )
                                )}</ul></li>
                            </ol>
                        </li>
                    ))}
                </ul>
            </>
        )
    };
}

export default Items;