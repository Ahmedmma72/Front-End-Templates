import React,{Component} from 'react'
import Additems from './components/Additems/Additems';
import Todoitems from './components/Todoitems/Todoitems';
class App extends Component{
  state={
      items: [
        {id:1,name:"ahmed",age:12},
        {id:2,name:"omar",age:34},
        {id:3,name:"mahoud",age:56},
      ]
  }
  deleteItem=(id)=>{
    let items=this.state.items.filter(item=>item.id!==id);
    this.setState({items});
  }
  addItem=(item)=>{
     item.id=Math.random();
     let items=this.state.items;
     items.push(item);
     this.setState({items});
  }
  render(){
    return (
      <div className="App container">
        <h1 className="text">Todo List</h1>
        <Todoitems items={this.state.items} deleteItem={this.deleteItem}/>
        <Additems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
