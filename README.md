# react-use-typer

## Install

```bash
npm install --save react-pagination-hook
```

## Usage

```jsx
import React from 'react';
import usePagination from 'react-use-paging';

const MyComponent = () => {
     const myArrayOfThings = [
        { id: 1, title: 'first' },
        { id: 2, title: 'second' },
        ...
    ];
    const { items, pages, setCurrentPage, currentPage } = usePagination(
        myArrayOfThings,
        {
            resultPerPage: 2,
            alwaysVisible: false // when false page n1 won't show if all results holds in one page
        }
    );
    return (
        <>
            {items.map(item => (
                <div>
                    <div className="row" key={item.id}>
                        {item.title}
                    </div>
                </div>
            ))}
            {pages.map(page => (
                <button
                    key={page}

                    // You add style to the current page by cheking the current page you are on.
                    className={page === currentPage ? 'my-active-classs' : ''}
                    onClick={() => setCurrentPage(page)}
                >
                    page {page}
                </button>
            ))}
        </>
    );
};
```

### Options

| Name          | Type        | Default value | Is Required | Description                            |
| ------------- | ----------- | ------------- | ----------- | -------------------------------------- |
| [ ... ]       | Array       | [ ]           | Yes         | Content you want to be paginate.       |
| { ... }       | Object      | {}            | Yes         | Options eg. result per pages.          |
| resultPerPage | Number (ms) | 2             | No          | Speed at which letters will be typed.  |
| alwaysVisible | Number (ms) | true          | No          | Speed at which letters will be erased. |

## License

MIT © [JeremieNallet](https://github.com/JeremieNallet)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
