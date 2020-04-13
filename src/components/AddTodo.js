import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        title: '',
        content: '',
        importance: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.importance)
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
                    <input className="title" type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    <label>Content</label>
                    <textarea type="text" rows="20" name="content" onChange={this.handleChange} value={this.state.content} placeholder="detail it to make it..."/>

                    <h4>Prioritise</h4>
                    <div className="radio">
                        <input id="red" name="importance" value="red" type="radio" checked={this.state.importance === 'red'} onChange={this.handleChange}/>
                        <label htmlFor="red">Red</label>
                        <input id="orange" name="importance" value="orange" type="radio" checked={this.state.importance === 'orange'} onChange={this.handleChange}/>
                        <label htmlFor="orange">Orange</label>
                        <input id="yellow" name="importance" value="yellow" type="radio" checked={this.state.importance === 'yellow'} onChange={this.handleChange}/>
                        <label htmlFor="yellow">Yellow</label>
                    </div>
                    
                    <button onClick={this.handleClick}>+</button>
                    <h6>if you refresh the page...you will lose your tasks...</h6>
                    <h6>click on each task to remove...</h6>
                </form>
            </div>
        )
    }
}