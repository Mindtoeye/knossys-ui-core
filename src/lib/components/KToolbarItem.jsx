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
    if (this.props.toggle) {
      if (this.props.toggle==true) {
        if (this.props.onItemToggle) {
          this.props.onItemToggle (e, this.props.itemIndex);
        }
        return;
      }
    }

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
