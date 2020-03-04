import { useState, useEffect } from 'react';

const paginate = (items, currentPage, resultPerPage) => {
    if (items instanceof Array) {
        const startIndex = (currentPage - 1) * resultPerPage;
        return {
            items: items.slice(startIndex, startIndex + resultPerPage)
        };
    } else {
        throw new Error(`Array is required.`);
    }
};

const usePagination = (
    initialArray = [],
    { resultPerPage = 1, alwaysVisible = true }
) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [pageCount, setPageCount] = useState(null);

    const { items } = paginate(initialArray, currentPage, resultPerPage);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        setTotalPage(Math.ceil(initialArray.length / resultPerPage));
        setPageCount(totalPage === 1 && !alwaysVisible ? 0 : totalPage);
        setPages([...Array(pageCount).keys()].map(key => key + 1));
    }, [
        alwaysVisible,
        pageCount,
        initialArray.length,
        totalPage,
        resultPerPage
    ]);

    return { items, pages, setCurrentPage, currentPage };
};

export default usePagination;
