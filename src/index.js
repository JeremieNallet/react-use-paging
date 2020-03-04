import { useState, useEffect } from 'react';

const paginate = (items, currentPage, resultPerPage) => {
    if (items instanceof Array) {
        const startIndex = (currentPage - 1) * resultPerPage;
        return {
            items: items.slice(startIndex, startIndex + resultPerPage)
        };
    } else {
        throw new Error(`Items is not an array.`);
    }
};

const usePagination = (
    initialArray = [],
    { resultPerPage = 1, alwaysVisible = true }
) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [checkPageEmpty, setCheckPageEmpty] = useState(0);

    const { items } = paginate(initialArray, currentPage, resultPerPage);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        setTotalPage(Math.ceil(initialArray.length / resultPerPage));
        setCheckPageEmpty(totalPage === 1 && !alwaysVisible ? 0 : totalPage);
        setPages([...Array(checkPageEmpty).keys()].map(key => key + 1));
    }, [
        alwaysVisible,
        checkPageEmpty,
        initialArray.length,
        totalPage,
        resultPerPage
    ]);

    return { items, pages, setCurrentPage, currentPage };
};

export default usePagination;
