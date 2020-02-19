import React from 'react';

const Pagination = ({ paginate, pageNumbers, currentPage }) => {
    // Conditions for pagination pageNumbers display where the shown pages are max+2 or min-2 from the current page
    let displayedNumbers
    if (pageNumbers.length <= 5) {
        displayedNumbers = pageNumbers
    } else {
        if (currentPage === 1) {
            displayedNumbers = pageNumbers.slice(0, currentPage + 4)
        }
        else if (currentPage === 2) {
            displayedNumbers = pageNumbers.slice(0, currentPage + 3)
        }
        else if (currentPage >= 3) {
            if (currentPage === pageNumbers.length) {
                displayedNumbers = pageNumbers.slice(currentPage - 5, currentPage)

            }
            else if (currentPage === pageNumbers.length - 1) {
                displayedNumbers = pageNumbers.slice(currentPage - 4, currentPage + 1)
            }
            else {
                displayedNumbers = pageNumbers.slice(currentPage - 3, currentPage + 2)
            }
        }
    }
    return (
        <nav>
            <ul>
                {/* Conditions for the "Previous" button */}
                {currentPage > 1 ?
                    <li
                    >
                        <a
                            onClick={() => paginate(currentPage - 1)}
                            href="#">
                            Wstecz
                </a>
                    </li>
                    : null
                }
                {displayedNumbers.map(number => (
                    <li key={number}
                        className={currentPage === number ? 'active' : ""}
                    >
                        <a
                            onClick={() => paginate(number)}
                            href="#">
                            {number}
                        </a>
                    </li>
                ))}
                {/* Conditions for the "Next" button */}
                {currentPage < pageNumbers.length ?
                    <li
                    >
                        <a
                            onClick={() => paginate(currentPage + 1)}
                            href="#">
                            Dalej
                </a>
                    </li>
                    : null
                }
            </ul>
        </nav>
    );
}

export default Pagination;