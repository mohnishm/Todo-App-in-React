import React from 'react';
import Add from './Add';
import Title from './Title';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {list:['abc']}
  }

  addItem() {
      this.setState = {}
  }
  
  render(){
    return (
    <div className="App">
      <Title todoCount={this.state.list.length}></Title>
      <Add item={this.state.list}></Add>
    </div>
  );
  }
  
}