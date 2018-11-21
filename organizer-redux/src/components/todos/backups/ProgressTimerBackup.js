import React from 'react';
import '../common/Timer.css';

import Timer from '../common/Timer';

class ProgressTimer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: true,
            finish: false,
        }

        this.onStart = this.onStart.bind(this);
        this.onShowFinish = this.onShowFinish.bind(this);
        this.onSaveProgress = this.onSaveProgress.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.showTime = this.showTime.bind(this);
    }

    onStart() {
        this.setState({ start: false });
        this.props.onStart();
    }

    onShowFinish() {
        this.props.onPause();
        this.setState({finish:true});
    }

    onSaveProgress() {
        const minutes = Math.floor(this.props.seconds / 60);
        if(minutes > 0) {
            this.props.onUpdateProgress(this.props.todo._id, minutes);
            
        }
        this.onCancel();
    }

    onCancel() {
        this.props.onReset();
        this.setState({start:true, finish:false});
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
        console.log('ProggressTimer rendering');
        if (this.state.start) {
            return <button onClick={this.onStart} className='btn btn-info timer-btn'>></button>;
        } else {
            return (
                <div id='timer'>
                    <h1>{this.props.todo.name}</h1>
                    <button onClick={this.onShowFinish} className='btn btn-info timer-btn'>Finish</button>
                    {this.state.finish &&
                    <div className='messageBox'>
                        <p>Press Ok to save your progress. Press 'Cancel' to leave without saving.</p>
                        <button onClick={this.onCancel} className='btn btn-info timer-btn'>Cancel</button>
                        <button onClick={this.onSaveProgress} className='btn btn-info timer-btn'>Ok</button>
                    </div>}

                    {!this.state.finish &&
                    <Timer
                        onStart={this.props.onStart}
                        onPause={this.props.onPause}
                        onReset={this.props.onReset}
                        seconds={this.props.seconds}
                        showTime={this.showTime} />}
                </div>
            );
        }
    }
}

export default ProgressTimer;