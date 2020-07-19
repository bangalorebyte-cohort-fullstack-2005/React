import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        title : ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ title: ''});
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value})

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                name="title" 
                type="text" 
                placeholder="Add Todo... " 
                value = {this.state.title} 
                onChange={this.onChange}
                />
                <input
                type = "submit"
                value = "submit"
                className='btn'
                style={{flex:1}}
                />
            </form>
        )
    }
}

export default Addtodo
