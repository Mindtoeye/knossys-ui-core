import React, { Component } from 'react';

import './styles/main.css';

/**
 * 
 */
class KnossysInfoPanel extends Component {

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
    let classes="kinfopanel";
    let children;
    let style;

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.classes) {
      classes="kinfopanel " + this.props.classes;
    }

    if (this.props.children) {
      children=this.props.children;
    } else {
      children=<p>This is the most basic panel in Knossys. It is mainly used to build fixed-location info panels. It is not the basis for windows and dialogs. It does use the theme.</p>;
    }

    return (
      <div className={classes} style={style}>
      {children}
      </div>
    );
  }
}

export default KnossysInfoPanel;
