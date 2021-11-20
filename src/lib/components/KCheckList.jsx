
import React, { Component } from 'react';

import KCheckListItem from './KCheckListItem';

import './styles/lists.css';

/**
 * 
 */
class KCheckList extends Component {

  static TINY = 'small';
  static REGULAR = 'regular';
  static MEDIUM = 'medium';
  static LARGE = 'large';

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
    let classes="kcheck-list klist-regular";
    let style;

    if (this.props.size) {
      if (this.props.size==KButton.TINY) {
        classes="kcheck-list klist-tiny";
      }

      if (this.props.size==KButton.REGULAR) {
        classes="kcheck-list klist-regular";
      }

      if (this.props.size==KButton.MEDIUM) {
        classes="kcheck-list klist-medium";
      }

      if (this.props.size==KButton.LARGE) {
        classes="kcheck-list klist-large";
      }
    }

    if (this.props.style) {
      style=this.props.style;
    }

    if (this.props.classes) {
      classes=classes + " " + this.props.classes;
    }

    return (
      <ul className={classes} style={style}>
        <KCheckListItem>Head</KCheckListItem>
        <KCheckListItem>Shoulders</KCheckListItem>
        <KCheckListItem>Knees</KCheckListItem>
        <KCheckListItem>Toes</KCheckListItem>
      </ul>
    );
  }
}

export default KCheckList;
