import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Task from './Task';



class App extends Component {
  state={
    items:[],
    text:""
  }
  handleChange = e =>{
    this.setState({ text: e.target.value })
  }
  
  handleAdd = e =>{
    if(this.state.text!== ""){
      const items = [...this.state.items,this.state.text];
      this.setState({items: items, text:""});
    }
  }

  handleDelete = id =>{
    const Olditems = [...this.state.items];
    const items = Olditems.filter((element,i)=>{
      return i!=id
    })
    this.setState({items:items});
  }

  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto shadow-lg p-3  rounded'>
            <h2 className='text-center'>TODO APPLICTION</h2>
            <div className='row'>
            <div className="input-group mb-3 gap-3">
              <input type="text" className="form-control" placeholder="Add New Task...." aria-label="" aria-describedby="button-addon2" value={this.state.text} onChange={this.handleChange}></input>
              <button className="btn btn-success" type="button" id="button-addon2" onClick={this.handleAdd}>ADD</button>
            </div>
            <hr></hr>
            <div className='container'>
              <ul className="list-group">
               {
                 this.state.items.map((value,i)=>{
                   return <Task key={i}  id={i} value={value} sendData={this.handleDelete} />
                 })
               }
              </ul>
            </div>
            </div>
          </div>
        </div>     
      </div>
    )
  }
}

export default App;