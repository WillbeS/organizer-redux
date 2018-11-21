import React from 'react';

//TODO - decide if to use this or find better!!!!!
class Sound extends React.Component {
    constructor(props) {
      super(props);
      this.state = { play: false };
      this.url = 'https://pagafun.com/apps/sounds/MatchSound.mp3';
      this.audio = new Audio(this.url);
      this.togglePlay = this.togglePlay.bind(this);
    }
  
    togglePlay() {
      this.setState({ play: !this.state.play });
      console.log(this.audio);
      this.state.play ? this.audio.play() : this.audio.pause();
    }
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      );
    }
  }
  
  export default Sound;