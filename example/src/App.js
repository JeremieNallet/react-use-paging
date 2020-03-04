import React from 'react';
import usePagination from 'use-pagination';

const App = () => {
    const myArrayOfThings = [
        { id: 1, title: 'list item 1' },
        { id: 2, title: 'list item 2' },
        { id: 3, title: 'list item 3' },
        { id: 4, title: 'list item 4' }
    ];

    const { items, pages, setCurrentPage, currentPage } = usePagination(
        myArrayOfThings,
        {
            resultPerPage: 2,
            alwaysVisible: false
        }
    );

    return (
        <>
            {items.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
            {pages.map(page => (
                <button
                    key={page}
                    className={page === currentPage ? 'my-active-classs' : ''}
                    onClick={() => setCurrentPage(page)}
                >
                    page {page}
                </button>
            ))}
        </>
    );
};
export default App;
