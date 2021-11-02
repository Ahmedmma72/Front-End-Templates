import React,{Component} from 'react'
import './Todoitems.css'
class Todoitems extends Component{
render(){
    const {items,deleteItem}=this.props;
    const itemsList=items.length ?(items.map(item=>{
        return(
        <div key={item.id}>
           <span className="name">{item.name}</span>
           <span className="age">{item.age}</span>
           <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
        </div>
        )
    })):
    (
        <p>There is nothing to show</p>
    )
    return(
         <div className="listItems">
             <span className="name title">Name</span>
             <span className="age title">Age</span>
             <span className="action title">Delete</span>
             {itemsList}
         </div>  
    )
}


}

export default Todoitems;