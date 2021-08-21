import React, { Component } from 'react'
import {data} from './mock'

export default class App extends Component {
  state={
    search: 'id',
    list: data,
  }
  render() {
    const onSearch=(e)=>{
      const newData= data.filter((value)=>{
        if(Number.isInteger(value[this.state.search])){
          let list=value[this.state.search].toString().toLocaleLowerCase();
          return list.includes(e.target.value.toLocaleLowerCase())
        }else{
          let list=value[this.state.search].toLocaleLowerCase();
          return list.includes(e.target.value.toLocaleLowerCase())
        }
      })
      this.setState({[e.target.list]: e.target.value, list: newData})
    }
    const onSelect=(e)=>{
      this.setState({search: e.target.value})
    }
    return (
      <div className="wrapper">
          <input  type="text" onChange={onSearch} />
          <select name="" id="" onChange={onSelect}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="status">status</option>
          </select>
          <table border='1' style={{borderCollapse: 'collapse', width: '400px'}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.list.map((value)=>(
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.status}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
      </div>
    )
  }
}
