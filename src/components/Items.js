import React from 'react';

const Items = ({ currentPage, itemsPerPage, currentItems, allItems, loading, error }) => {
    if (error) {
        return <h2>{error.toString()}</h2>
    }
    else if (allItems === 'Start') {
        return <h2>Znajdź swoją piosenkę</h2>
    }
    else if (loading) {
        return <h2>Ładowanie...</h2>
    }
    else if (allItems.length === 0) {
        return <h2>Brak wyników...</h2>
    }
    else {
        return (
            <>
                <p>Liczba wszystkich wyników: {allItems.length}</p>
                {/* ternary statement below makes the page count show only when needed */}
                <p>{allItems !== "Start" && allItems.length !== 0 && !loading ? `Strona ${currentPage} z ${Math.ceil(allItems.length / itemsPerPage)}` : null}</p>
                <ul>
                    {currentItems.map(item => (
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