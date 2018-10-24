import React, { Component} from 'react';
import ListForm from './ListForm';
import { createList } from '../../actions/listActions';
import {connect} from 'react-redux';
import toastr from 'toastr';
import actionTypes from '../../constants/actionTypes';

class CreatePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            error: ''
        }

        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onInputChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if(!this.isValidForm()) {
            return;
        }

        const data = { name: this.state.name };
        this.props.createList(data);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) {
            toastr.error(newProps.error);
            return;
        }

        if(newProps.remote === actionTypes.LIST_CREATED) {
            toastr.success('New list added successfully!');
            this.props.history.push('/lists');
        }
    }

    isValidForm() {
        const name = this.state.name;
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
                    name={this.state.name}
                    onChange={this.onInputChangeHandler}
                    onSubmit={this.onSubmitHandler}
                    error={this.props.error} />
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        remote: state.list.remote,
        error: state.list.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createList: (data) => dispatch(createList(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);