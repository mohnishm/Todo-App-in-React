import React from 'react';
import './App.css';
import Add from './Components/Add';
import Items from './Components/Items';
import Title from './Components/Title';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {list:[]}
    this.addItem = this.addItem.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  addItem(val) {
    let updated = [...this.state.list, val];
    this.setState({ list: updated });
  }
  
  handleRemove(id){
    const remainder = this.state.list.filter((_, i) => 
      i !== id
    );
    
    this.setState({list: remainder});
  }

  render(){
    return (
    <div className="App">
      <Title itemCount={this.state.list.length}></Title>
      <Add addItem={this.addItem}></Add>
      <Items items={this.state.list} remove={this.handleRemove}></Items>
    </div>
  );
  }
  
}