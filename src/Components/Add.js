import React from 'react';
import '../App.css';
import '../App.sass';

const Add = ({addItem}) => {
    let input;
    return (
    <form className="panel-block is-flex has-background-white" onSubmit={(e) => {e.preventDefault();
      if(input.value){
        addItem(input.value);
      }
      input.value = '';
    }}>
      <input className="input" type="text" placeholder="Add something..." ref={(node) => {  
      input = node;}}/>
    </form>
    );
}

export default Add;