import React from 'react';

export default function Add(){
    return (
    <form>
      <input type="search" placeholder="Add something..."></input>
      <button onClick={(e) => {e.preventDefault();}} type="submit">Add</button>
    </form>
    );
}
