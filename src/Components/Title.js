import React from 'react';

const Title = (props) => {
    return(
        <p className="panel-heading">Todo - {props.itemCount} items</p>
    );
}

export default Title;