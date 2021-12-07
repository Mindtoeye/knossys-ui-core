import React, { Component } from 'react';
import { FaFile, FaFolder, FaFolderOpen, FaChevronDown, FaChevronRight } from 'react-icons/fa';

import './styles/toolbar.css';

/**
 * 
 */
class KToolbar extends Component {

  static DIRECTION_HORIZONTAL = 'horizontal';
  static DIRECTION_VERTICAL = 'vertical';

  /**
   * 
   */
  constructor (props) {
    super (props);

    let dir=KToolbar.DIRECTION_HORIZONTAL;

    if (props.direction) {
      dir=props.direction;
    }

    this.state = {
      direction: dir
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
    let button;
    let classes="";
    let style;

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.state.direction==KToolbar.DIRECTION_HORIZONTAL) {
      classes="ktoolbar-horizontal";
    } else {
      classes="ktoolbar-vertical";
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    return (
      <div className={classes} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default KToolbar;
