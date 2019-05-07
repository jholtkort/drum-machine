import React, { Component } from "react";

import DrumButtons from "./DrumButtons";
import { sounds } from "../sounds/drumSounds";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
  }

  changeDescription = description => this.setState({ description });

  render() {
    return (
      <div className="container text-center drum-machine">
        <div className="container">
          <img
            src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="drums"
            className="text-center"
          />
          <h1 className="text-center">
            <u>Drum Machine</u>
          </h1>
          <h3 className="text-center">
            Each button will play a different sound. Either press with your
            keyboard or click with your mouse the corresponding keys to use the
            drum machine.
          </h3>

          <div className="row justify-content-center">
            {sounds.map(x => (
              <DrumButtons
                key={x.id}
                id={x.id}
                letter={x.letter}
                src={x.src}
                changeDescription={this.changeDescription}
              />
            ))}
          </div>
        </div>
        {/* { conditionally render type of sound} */
        this.state.description !== "" ? (
          <h3>Type of drum sound: {this.state.description}</h3>
        ) : null}
      </div>
    );
  }
}

export default App;
