import React from 'react';

const Items = ({
    // handleItemsPerPage, 
    currentPage, itemsPerPage, currentItems, allItems, loading, error }) => {
    if (error) {
        return <h2>{error.toString()}</h2>
    }
    else if (allItems === 'Start') {
        return null
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
                <ul className="items">
                    {currentItems.map(item => (
                        <li key={item.id} className="item">
                            <ol>
                                <li><span>Wykonawca: </span><a href={`http://www.songsterr.com/a/wa/artist?id=${item.artist.id}`}>
                                    {item.artist.name}</a></li>
                                <li><span>Tytuł: </span><a href={`http://www.songsterr.com/a/wa/song?id=${item.id}`}>{item.title}</a>
                                </li>
                                <li><span>Dostępne tabulatury: </span><ul>{item.tabTypes.map(tabType => (
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