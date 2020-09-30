import React from 'react';

export default function Title(todoCount) {
    return(
            <h1>Todo - {todoCount.length}</h1>
    );
}