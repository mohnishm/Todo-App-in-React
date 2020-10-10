import React from 'react';
import axios from 'axios';
import './App.css';
import './App.sass';
import Add from './Components/Add';
import Items from './Components/Items';
import Title from './Components/Title';


export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {list:[], counter: 0};
    this.addItem = this.addItem.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }
  
  componentDidMount(){
    axios.get(`http://localhost:8000/todo/api/`)
      .then(res => {
          const list = res.data;
          const unDoneList = list.filter(task => task.done === false)
          this.setState({ list: list, counter: unDoneList.length });
      });
  }

  addItem(val) {
    axios.post('http://localhost:8000/todo/api/task/', { data: val })
    .then(res => {
      let updated = [...this.state.list, res.data];
      let increment = this.state.counter + 1;
      this.setState({ list: updated, counter: increment });
    })
  }
  
  handleDone(item){
    axios.post(`http://localhost:8000/todo/api/delete/${item._id}`)
    .then((res) => res.data);
    let decrement = this.state.counter - 1;
    let updatedList = this.state.list.map(task => {
      if(task._id === item._id) {
        task.done = true;
      }
      return task;
    });
    this.setState({list: updatedList, counter: decrement});
  }

  render(){
    return (
      <div className="App">
        <nav className="panel is-primary light">
          <Title itemCount={this.state.counter}></Title>
          <Add addItem={this.addItem}></Add>
          <Items items={this.state.list} handleDone={this.handleDone}></Items>
        </nav>  
      </div>
    );
  }
}