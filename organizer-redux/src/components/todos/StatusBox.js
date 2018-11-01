import React, {Component} from 'react';

class StatusBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }

        this.toggleState = this.toggleState.bind(this);
    }


    toggleState(e) {
        const checked = !this.state.checked;
        this.setState({checked});
        console.log('Status updated');

        if(this.props.onClick !== undefined) {
            this.props.onClick(e);
        }
    }
    
    render() {
        let squareClass = this.state.checked ? 'far fa-check-square' : 'far fa-square';

        return(
            <span 
                onClick={this.toggleState}>
                <i className={squareClass}></i>
            </span>
        );
    }
}

export default StatusBox;