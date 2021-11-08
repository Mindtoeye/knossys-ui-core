import React, { Component } from 'react';

import './styles/main.scss';

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
      </div>
    );
  }
}

export default KnossysInfoPanel;
