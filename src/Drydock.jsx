import React, { Component } from 'react';

import KnossysInfoPanel from './lib/components/KnossysInfoPanel';

import './Drydock.css';

/**
 * 
 */
class Drydock extends Component {

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
      <div className="desktopContent">
       <KnossysInfoPanel x={50} y={50} />
      </div>
    );
  }
}

export default Drydock;
