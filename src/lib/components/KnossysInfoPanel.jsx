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
    return (
      <div className="kinfopanel" style={{left: this.props.x+"px", top: this.props.y+"px"}}>
      <p>This is the most basic panel in Knossys. It is mainly used to build fixed-location
      info panels. It is not the basis for windows and dialogs. It does use the theme.</p>
      </div>
    );
  }
}

export default KnossysInfoPanel;
