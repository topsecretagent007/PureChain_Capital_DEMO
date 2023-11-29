import React from "react";

class Typewriter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      textIndex: 0 // Keep track of which text we're on
    };
  }

  componentDidMount() {
    this.unmounted = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data: toRotate, typingSpeed = 100, pauseTime = 2000 } = this.props;
    const fullTxt = toRotate[this.state.textIndex];
    const currentLength = this.state.text.length;

    // Determine whether we're typing out or pausing
    if (currentLength === fullTxt.length) {
      // Pause at the end of the text before moving to the next one
      setTimeout(() => {
        if (!this.unmounted) {
          this.setState(prevState => ({
            textIndex: (prevState.textIndex + 1) % toRotate.length, // Move to the next text
            text: "" // Reset text to start typing the next one
          }), this.tick); // Call tick again after state update
        }
      }, pauseTime);
      return;
    } else {
      // Type out the next character
      this.setState({
        text: fullTxt.substring(0, currentLength + 1)
      });
    }

    // Set the timeout for the next tick
    setTimeout(() => {
      this.tick();
    }, typingSpeed);
  }

  render() {
    return <span className="typewriter">{this.state.text}</span>;
  }
}

export default Typewriter;
