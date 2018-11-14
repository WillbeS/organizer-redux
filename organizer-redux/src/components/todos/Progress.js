import React, { Component } from 'react';

import './Progress.css';

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    handleChange(event) {
        this.setState({ value: Number(event.target.value) });
    }

    onAdd(num) {
        let newValue = this.state.value + Number(num);
        this.setState({ value: newValue });
    }

    onSave() {
        this.props.onSave(this.props.todo._id, this.state.value);
        this.setState({ value: 0 });
    }

    render() {
        return (
            <div id='progress'>
                <span>{this.props.todo.progress} / {this.props.todo.target} {this.props.todo.type}</span>
                <button onClick={() => this.onAdd(-1)} className='input-control'>-</button>
                <input
                    type='text'
                    name='progress'
                    value={this.state.value}
                    onChange={this.handleChange} />
                <button onClick={() => this.onAdd(1)} className='input-control'>+</button>
                <button className='submit'
                    onClick={this.onSave}>
                    Add
                </button>
            </div>
        );
    }
}

export default Progress;