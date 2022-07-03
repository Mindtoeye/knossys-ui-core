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
      toggled: -1,
      direction: dir
    };

    this.onItemToggle=this.onItemToggle.bind(this);
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
  onItemToggle (e, anIndex)  {
    console.log ("onItemToggle ("+anIndex+")");

    if (this.state.toggled==anIndex) {
      this.setState ({
        toggled: -1
      });      
      return;
    }

    this.setState ({
      toggled: anIndex
    });
  }

  /**
   *
   */
  render () {
    let button;
    let classes="";
    let style;
    let label;
    let children=[];

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.label) {
      label=<div className="ktoolbar-vertical-label">{this.props.label}</div>
    }

    if (this.state.direction==KToolbar.DIRECTION_VERTICAL) {
      classes="ktoolbar-vertical";      
    } else {
      classes="ktoolbar-horizontal";
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    for (let i=0;i<this.props.children.length;i++) {
      if (this.state.toggled==i) {
        let refactoredChild=React.cloneElement(this.props.children [i], { key: ("refactored-"+i), onItemToggle: this.onItemToggle, itemIndex: i, toggled: true });
        children.push(refactoredChild);
      } else {
        let refactoredChild=React.cloneElement(this.props.children [i], { key: ("refactored-"+i), onItemToggle: this.onItemToggle, itemIndex: i });
        children.push(refactoredChild);
      }
    }

    if (this.state.direction==KToolbar.DIRECTION_VERTICAL) {
      return (
        <div className={classes} style={style}>
          {label}
          <div className="ktoolbar-vertical-ribbon">
            {children}
          </div>
        </div>
      );      
    }

    return (
      <div className={classes} style={style}>
        {children}
        <div className="ktoolbar-padding">&nbsp;</div>
      </div>
    );
  }
}

export default KToolbar;
