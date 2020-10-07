import React from 'react';

const Items = ({items, handleDone}) => {

    const taskDone = (item, index) => (
        <li className="panel-block has-background-light" key={index}>
            <s>{item.data}</s>
        </li>
    );

    const taskNotDone = (item, index) => (
        <li className="panel-block has-background-white" key={index}>
            {item.data}
            <button className="button ml-2" onClick={() => handleDone(item)}>Done</button>
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