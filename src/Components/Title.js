import React from 'react';

const Title = (props) => {
    return(
        <div>
            <h1>Todo - {props.itemCount} items</h1>
        </div>
    );
}

export default Title;