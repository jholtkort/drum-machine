import React, { Component } from "react";

class DrumButtons extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  handleKeyPress = e => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.changeDescription(this.props.id);
    }
  };

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.changeDescription(this.props.id);
  };

  render() {
    return (
      <button
        variant="secondary"
        size="lg"
        className="drum-pad col-3 m-3"
        id={this.props.id}
        onClick={this.handleClick}
        onKeyPress={this.handleKeyPress}
        style={{ borderRadius: "30px" }}
      >
        <h1>{this.props.letter}</h1>
        <audio
          ref={ref => (this.audio = ref)}
          className="clip"
          src={this.props.src}
          id={this.props.letter}
        />
      </button>
    );
  }
}

export default DrumButtons;
