import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchAll } from '../../actions/listActions';
import { connect } from 'react-redux';
import ListThumb from './ListThumb';
import actionTypes from '../../constants/actionTypes';

//!!!!!!!!!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//TODO - Turn this into the main List Managin Component (all CRUD is controlled from here!!!!!!)
//REASON - Will mount/unmount only once and can use the data for all operations without fetching it every time
//!!!!!!!!!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class ManageListsPageBackup extends Component {
    componentDidMount() {
        if(this.props.remote === actionTypes.FETCH_LISTS_SUCCESS) {
            return;
        }

        //console.log('Fetching all for the first time or because something was changed');
        this.props.fetchAll();

    }

    render() {
        const data = this.props.data;
        let listItems = Object.keys(data).map( key => (
            <ListThumb key={key} list={data[key]} />
        ));
        console.log('Render Component');

        return (
            <div>
                <h1>Manage Lists</h1>
                <Link to='list/add'>Add List</Link>
                <div>
                    {listItems}
                </div>
                
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.list.data,
        remote: state.list.remote,
        error: state.list.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAll: () => dispatch(fetchAll())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageListsPageBackup);