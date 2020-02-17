import React from 'react';

const Pagination = ({ itemsPerPage, allItems, paginate }) => {
    const pageNumbers = [];
    // looping to find out how many pages in the pagination we need, numbers rounded up with Math.ceil
    for (let i = 1; i <= Math.ceil(allItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    // the if statement implemented to prevent pagination from appearing if the number of items is less than the number of items per page
    if (pageNumbers.length > 1) {
        return (
            <nav>
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a
                                onClick={() => paginate(number)}
                                href="#">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    } else {
        return null
    }
}

export default Pagination;