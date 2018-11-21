import React from 'react';
import './Timer.css';

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: true,
            stop: false,
            finish: false,
        }

        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.onPause = this.onPause.bind(this);
    }

    onStart() {
        this.setState({start: false, stop: false});
        this.props.onStart();
    }

    onStop() {
        this.props.onStop();
        this.setState({stop:true});
    }

    onPause() {
        this.setState({stop: true});
        console.log('here');
        this.props.onPause();
    }

    showTime() {
        let hours = Math.floor(this.props.seconds / 3600);
        let minutes = Math.floor(this.props.seconds / 60) % 60;
        let seconds = this.props.seconds % 60;
        return `${padLeft(hours)} : ${padLeft(minutes)} : ${padLeft(seconds)}`;

        function padLeft(num) {
            num = '00' + num;
            return num.substring(num.length, num.length - 2);
        }
    }

    render() {
        console.log('rendering');
        if (this.state.start) {
            return <button onClick={this.onStart} className='btn btn-info timer-btn'>></button>;
        } else {
            return (
                <div id='timer'>
                <div className='timer-counter'>
                    {this.showTime()}
                </div>
                {this.state.stop && 
                    <button onClick={this.onStart} className='btn btn-info timer-btn'>Start</button>}
                    {!this.state.stop && 
                    <button onClick={this.onPause} className='btn btn-info timer-btn'>Pause</button>}
                    <button onClick={this.onStop} className='btn btn-info timer-btn'>Reset</button>
                    <div className='messageBox'>
                        <p>Your progress will be saved automatically. Press 'Cancel' to leave without saving.</p>
                        <button className='btn btn-info timer-btn'>Cancel</button>
                        <button className='btn btn-info timer-btn'>Ok</button>
                    </div>
                </div>
            );
        }
    }
}

export default Timer;