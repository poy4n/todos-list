import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: '',
            content: ''
        })
    }

    render() {
        return (
            <div className="form-container">
                <form className="form">
                    <label>Titile</label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    <label>Content</label>
                    <textarea type="text" rows="30" name="content" onChange={this.handleChange} value={this.state.content} placeholder="detail it to make it..."/>
                    <button onClick={this.handleClick}>ADD</button>
                </form>
            </div>
        )
    }
}
