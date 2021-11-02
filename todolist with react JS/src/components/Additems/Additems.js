import React,{Component} from 'react'
import './Additems.css'
class Additems extends Component{
    state={
        name:"",
        age:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
     e.preventDefault();
    if(e.target.name.value===''||e.target.age.value===''){
          return false;
    }else{
        this.props.addItem(this.state);
        this.setState({
            name:"",
            age:""
        })
    }

    }
render(){
    return(
         <div className="listItems form">
         <form onSubmit={this.handleSubmit}>
             <input className="name" type="text" id="name" placeholder="enter your name" value={this.state.name} onChange={this.handleChange} />
             <input className="age" type="number" id="age" placeholder="enter your age" value={this.state.age } onChange={this.handleChange}/>
             <input className="action" type="submit" value="Add"/>
         </form>
         </div>  
    )
}


}

export default Additems;