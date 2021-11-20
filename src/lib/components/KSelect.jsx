
import React, { Component } from 'react';

import './styles/select.css';

/**
 * 
 */
class KSelect extends Component {

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
    console.log ("componentDidMount ()");
  }

  /**
   * 
   */
  componentWillUnmount() {      
  }

  /**
   *
   */
  render () {
    let style;
    let classes="kselect";

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
