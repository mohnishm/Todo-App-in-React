import React from 'react';
import '../App.css';

const Add = ({addItem}) => {
    let input;
    return (
    <form onSubmit={(e) => {e.preventDefault();
      if(input.value){
        addItem(input.value)
      }
      input.value = ''
    }}>
      <input type="search" placeholder="Add something..." ref={(node) => {  
      input = node;}}></input>
      <button type="submit">Add</button>
    </form>
    );
}

export default Add;