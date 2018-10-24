import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchAll } from '../../actions/listActions';
import { connect } from 'react-redux';
import ListThumb from './ListThumb';

class ManageListsPage extends Component {
    componentWillMount() {
        this.props.fetchAll();
    }

    render() {
        let listData = this.props.data.map( list => (
            <ListThumb key={list._id} list={list} />
        ));


        return (
            <div>
                <h1>Manage Lists</h1>
                <Link to='list/add'>Add List</Link>
                <div>
                    {listData}
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageListsPage);