import React from 'react';
import './App.css';
import Add from './Components/Add';
import Items from './Components/Items';
import Title from './Components/Title';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {list:[], counter : 0};
    this.addItem = this.addItem.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  addItem(val) {
    let obj = {id: this.state.counter, data:val, done: false};
    let updated = [...this.state.list, obj];
    let increment = this.state.counter + 1;
    this.setState({ list: updated, counter: increment });
  }
  
  handleDone(item){
    let updated = this.state.list;
    updated.forEach(task => {
      if(task.id === item.id ){
        task.done = true;
      }
    });
    let decrement = this.state.counter - 1;
    this.setState({list: updated, counter: decrement});
  }

  render(){
    return (
      <div className="App">
        <Title itemCount={this.state.counter}></Title>
        <Add addItem={this.addItem}></Add>
        <Items items={this.state.list} handleDone={this.handleDone}></Items>
      </div>
    );
  }
}