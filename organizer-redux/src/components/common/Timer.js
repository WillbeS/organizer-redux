import React from 'react';
import './Timer.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: false,
            stop: false,
        }

        this.onStart = this.onStart.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onPause = this.onPause.bind(this);
    }

    onStart() {
        this.setState({ stop: false });
        this.props.onStart();
    }

    onReset() {
        this.setState({ stop: true });
        this.props.onReset();
    }

    onPause() {
        this.setState({ stop: true });
        this.props.onPause();
    }

    // showTime() {
    //     let hours = Math.floor(this.props.seconds / 3600);
    //     let minutes = Math.floor(this.props.seconds / 60) % 60;
    //     let seconds = this.props.seconds % 60;
    //     return `${padLeft(hours)} : ${padLeft(minutes)} : ${padLeft(seconds)}`;

    //     function padLeft(num) {
    //         num = '00' + num;
    //         return num.substring(num.length, num.length - 2);
    //     }
    // }

    render() {
        console.log('Timer rendering');

        return (
            <div className='timer-counter'>
                <div>
                    {this.props.showTime()}
                </div>
                {this.state.stop &&
                    <button onClick={this.onStart} className='btn btn-info timer-btn'>Start</button>}
                {!this.state.stop &&
                    <button onClick={this.onPause} className='btn btn-info timer-btn'>Pause</button>}
                <button onClick={this.onReset} className='btn btn-info timer-btn'>Reset</button>
            </div>
        );
    }
}

export default Timer;