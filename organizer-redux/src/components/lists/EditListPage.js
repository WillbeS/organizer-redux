import React, { Component } from 'react';
import ListForm from './ListForm';

class EditListPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            error: ''
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e, id, list) {
        e.preventDefault();

        if(!this.isValidForm()) {
            return;
        }

        console.log(list);
        this.props.editList(id, list);
    }

    isValidForm() {
        const name = this.props.list.name;
        let formIsValid = true;
        let error = '';

        if (name === '') {
            error = 'All input fields are required!';
            formIsValid = false;
        }

        if (error) {
            this.setState({ error });
        }

        return formIsValid;
    }

    render() {
        return (
            <div  className='row'>
            <div className='col-md-6 offset-md-3'>
            <h1>Edit List</h1>
                <ListForm
                    name={this.props.list.name}
                    onChange={this.props.onChange}
                    onSubmit={(e) => (this.onSubmitHandler(e, this.props.id, this.props.list))}
                    error={this.state.error} /> 
            </div>
            </div>
        );
    }
}

export default EditListPage;