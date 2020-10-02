import React from 'react';

const Items = ({items, remove}) => {
    return(
        <div className="Items">
            <ul>{items.map((item, index) => 
                    <li key={index}>
                        {item}
                        <button onClick={() => remove(index)}>Delete</button>
                    </li>
            )}
            </ul>
        </div>
    );
}

export default Items;