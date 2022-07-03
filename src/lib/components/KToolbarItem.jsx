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
    this.toggle=this.toggle.bind(this);
    this.select=this.select.bind(this);
  }

  /**
   * 
   */
  componentDidMount () {
    //console.log ("componentDidMount ()");
    this.select ();
  }

  /**
   * 
   */
  onClick (e) {
    console.log ("toggle ()");
    
    if (this.toggle ()==true) {
      return;
    }

    if (this.props.onItemToggle) {
      this.props.onItemToggle(e);
    }    
  }

  /**
   *
   */
  toggle (e) {
    console.log ("toggle ()");

    if (this.props.toggle) {
      if (this.props.toggle==true) {
        if (this.props.onItemToggle) {
          this.props.onItemToggle (e, this.props.itemIndex);
        }
        return (true);
      }
    }

    return (false);
  }

  /**
   *
   */
  select () {
    console.log ("select ()");

    if (this.props.selected) {
      if (this.props.selected==true) {
        if (this.props.onItemToggle) {
          this.props.onItemToggle ({}, this.props.itemIndex);
        }
        return (true);
      }
    }

    return (false);
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

    if (this.props.toggled) {
      if (this.props.toggled==true) {
        classes=classes + " ktoolbaritem-toggled";
      }
    }

    return (
      <div className={classes} style={style} onClick={(e) => this.onClick(e)} title={this.props.tooltip}>
        {this.props.children}
      </div>
    );
  }
}

export default KToolbarItem;
