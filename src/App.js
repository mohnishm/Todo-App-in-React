import React from 'react';
import axios from 'axios';
import './App.css';
import './App.sass';
import Add from './Components/Add';
import Items from './Components/Items';
import Title from './Components/Title';


export default class App extends React.Component{
  _isMounted = false;

  constructor(props){
    super(props);
    this.state = {list:[], itemCounter: 0};
    this.addItem = this.addItem.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount() {
    this._isMounted = true;

    axios.get(`http://localhost:8000/todo/api/`)
      .then(res => {
        
        if(this._isMounted){
          const list = res.data;
          const unDoneList = list.filter(task => task.done === false)
          this.setState({ list: list, itemCounter: unDoneList.length });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
    console.log("unmounted.");
  }

  addItem(val) {
    axios.post('http://localhost:8000/todo/api/task/', { data: val })
    .then(res => {
      const itemCounter = this.state.counter + 1;
      const updatedList = this.state.list;
      updatedList.push({ data: val, done: false });
      console.log(res);
      console.log(res.data);
      this.setState({ list: updatedList, itemCounter: itemCounter });
    })
  }
  
  handleDone(item){
    axios.post(`http://localhost:8000/todo/api/delete/${item._id}`)
    .then(() => console.log("Item Deleted."));

    let updatedList = this.state.list;
    updatedList.forEach(task => {
      if(task.id === item.id ){
        task.done = true;
      }
    });    
    const itemCounter = this.state.itemCounter - 1;
    this.setState({ list: updatedList, itemCounter: itemCounter });
  }

  render(){
    return (
      <div className="App">
      <nav className="panel is-primary light">
        <Title itemCount={this.state.itemCounter}></Title>
        <Add addItem={this.addItem}></Add>
        <Items items={this.state.list} handleDone={this.handleDone}></Items>
      </nav>  
      </div>
    );
  }
}