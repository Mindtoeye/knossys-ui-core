import React, { Component } from 'react';

import './styles/toolbar.css';

/**
 * 
 */
class KToolbarItem extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.state = {      
    };

    this.onClick=this.onClick.bind(this);
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
  onClick (e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  /**
   *
   */
  render () {
    let button;
    let classes="ktoolbaritem";
    let style;

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    return (
      <div className={classes} style={style} onClick={(e) => this.onClick(e)}>
        {this.props.children}
      </div>
    );
  }
}

export default KToolbarItem;
