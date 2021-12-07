
import React, { Component } from 'react';

import './styles/textinput.css';

/**
 * 
 */
class KTextInput extends Component {

  static TINY = 'small';
  static REGULAR = 'regular';
  static MEDIUM = 'medium';
  static LARGE = 'large';

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.state = {
      value: props.children   
    };

    this.handleChange=this.handleChange.bind(this);
  }

  /**
   * 
   */
  componentDidMount () {
    //console.log ("componentDidMount ()");
  }

  /**
   * 
   */
  componentWillUnmount() {
    //console.log ("componentWillUnmount ()");    
  }

  /**
   * 
   */
  handleChange(event) {
    this.setState({value: event.target.value});  

    if (this.props.handleChange) {
      this.props.handleChange(event.target.value);
    }
  }

  /**
   *
   */
  render () {
    let classes="ktextinput ktextinput-regular";
    let style;

    if (this.props.size) {
      if (this.props.size==KTextInput.TINY) {
        classes="ktextinput ktextinput-tiny";
      }

      if (this.props.size==KTextInput.REGULAR) {
        classes="ktextinput ktextinput-regular";
      }

      if (this.props.size==KTextInput.MEDIUM) {
        classes="ktextinput ktextinput-medium";
      }

      if (this.props.size==KTextInput.LARGE) {
        classes="ktextinput ktextinput-large";
      }
    }

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    return (
      <input type="text" className={classes} style={style} value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default KTextInput;
