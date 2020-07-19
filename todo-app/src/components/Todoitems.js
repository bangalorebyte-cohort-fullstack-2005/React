import React, { Component } from 'react'

export class Todoitems extends Component {
    getstyle =() => {
        if(this.props.todo.completed) {
            return{
                textDecoration: 'line-through'
            }
        }else{
            return{
            textDecoration:'none'
        }
    }
     }
    render() {
        const {id,title} = this.props.todo;

        return (
            <div style = {this.getstyle()} >
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} /> {' '}
                    { title } 
                    <button onClick={this.props.delTodo.bind(this,id)} style={ btnstyle }>x</button> </p>
            </div>
        )
    }
}

const btnstyle = {
    backgroundColor : 'red',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderradius: '50%',
    cursor: 'pointer',
    float: 'right',



}

// const itemstyle = {
//     backgroundColor : '#f4f4f4'
// }

export default Todoitems
