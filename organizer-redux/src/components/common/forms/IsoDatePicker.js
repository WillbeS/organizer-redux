import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

class IsoDatePicker extends Comment {
    constructor (props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(date) {
        this.setState({
          startDate: date
        });
    
        console.log(typeof date);
      }

      render() {
        return <DatePicker
            selected={props.value ? moment(props.value, 'DD-MM-YYYY') : moment()}
            onChange={props.onChange}
        />;
      }
}

export default IsoDatePicker;