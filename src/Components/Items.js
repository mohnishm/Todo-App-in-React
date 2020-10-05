import React from 'react';

const Items = ({items, handleDone}) => {

    const taskDone = (item, index) => (
        <li key={index}>
            <s>{item.data}</s>
        </li>
    );

    const taskNotDone = (item, index) => (
        <li key={index}>
            {item.data}
            <button onClick={() => handleDone(item)}>Done</button>
        </li>
    );

    return (
        <ul>
            {items.map((item, index) => {
                let res;
                if (item.done){
                    res = taskDone(item, index);
                } else {
                    res = taskNotDone(item, index);
                }
                return res;
            })}
        </ul>
    );
}

export default Items;