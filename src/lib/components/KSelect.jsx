
import React, { Component } from 'react';

import './styles/select.css';

/**
 * 
 */
class KSelect extends Component {

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
    };
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
  render () {
    let style;
    let classes="kselect kselect-regular";

    if (this.props.size) {
      if (this.props.size==KSelect.TINY) {
        classes="kselect kselect-tiny";
      }

      if (this.props.size==KSelect.REGULAR) {
        classes="kselect kselect-regular";
      }

      if (this.props.size==KSelect.MEDIUM) {
        classes="kselect kselect-medium";
      }

      if (this.props.size==KSelect.LARGE) {
        classes="kselect kselect-large";
      }
    }

    if (this.props.style) {
      style=this.props.style;
    }    

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    return (
      <select className={classes} style={style}>
        <option>Apples</option>
        <option>Pineapples</option>
        <option>Chocolate</option>
        <option>Pancakes</option>
      </select>
    );
  }
}

export default KSelect;
