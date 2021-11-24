
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
  
    this.list=[];

    this.state = {

    };

    this.registerItem=this.registerItem.bind(this);
    this.onItemCheck=this.onItemCheck.bind(this);
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
  registerItem (anId) {
    //console.log ("registerItem ("+anId+")");

    this.list.push ({
      id: anId,
      checked: false
    })
  }

  /**
   *
   */
  onItemCheck (e,aValue) {
    //console.log ("onItemCheck ("+e.target.id+","+aValue+")");

    for (let i=0;i<this.list.length;i++) {
      if(this.list[i].id==e.target.id) {
        this.list[i].checked=aValue;
        break;
      }
    }

    if (this.props.checklistChecked) {
      this.props.checklistChecked (this.list);
    }
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
        <KCheckListItem id="1" register={this.registerItem} onItemCheck={this.onItemCheck}>Head</KCheckListItem>
        <KCheckListItem id="2" register={this.registerItem} onItemCheck={this.onItemCheck}>Shoulders</KCheckListItem>
        <KCheckListItem id="3" register={this.registerItem} onItemCheck={this.onItemCheck}>Knees</KCheckListItem>
        <KCheckListItem id="4" register={this.registerItem} onItemCheck={this.onItemCheck}>Toes</KCheckListItem>
      </ul>
    );
  }
}

export default KCheckList;
