import React, { Component} from 'react';
import ListForm from './ListForm';

class CreateListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: ''
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if(!this.isValidForm()) {
            return;
        }

        //const data = { name: this.props.name };
        this.props.createList(this.props.list);
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
        return(
            <div  className='row'>
            <div className='col-md-6 offset-md-3'>
            <h1>Create List</h1>
                <ListForm
                    name={this.props.list.name}
                    onChange={this.props.onChange}
                    onSubmit={this.onSubmitHandler}
                    error={this.state.error} />
            </div>
            </div>
        );
    }
}

export default CreateListPage