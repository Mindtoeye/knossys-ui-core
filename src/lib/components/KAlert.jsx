import React, { Component } from 'react';

import KScrim from './KScrim';
import KButton from './KButton';

import './styles/alert.css';

/**
 * 
 */
class KAlert extends Component {

  /**
   * 
   */
  constructor (props) {
    super(props);

    this.state = {
      title: window.location.href + " says:",
      message: props.message,
      type: props.type,
      ownUpdate: false
    };

    this.onOk=this.onOk.bind(this);
    this.onYes=this.onYes.bind(this);
    this.onNo=this.onNo.bind(this);
  }

  /**
   * Return null to indicate no change to state.
   */
  static getDerivedStateFromProps(nextProps, state) {
    //console.log ("getDerivedStateFromProps ()");

    if (!state.ownUpdate) {
      if (state.state !== nextProps.state) {
        return {
          state: nextProps.state,
          type: nextProps.type,
          ownUpdate: false
        };
      }
    } else {
      return {
        ownUpdate: false
      }; 
    }
    
    return null;
  }  

  /**
   *
   */
  onOk () {
    if (this.props.onOk) {
      this.props.onOk();
    }
  }

  /**
   *
   */
  onYes () {
    if (this.props.onYes) {
      this.props.onYes();
    }    
  }

  /**
   *
   */
  onNo () {    
    if (this.props.onNo) {
      this.props.onNo();
    }    
  }    
  
  /**
   *
   */
  render () {
    let buttonBar;
    let alertClass="knossys-alert";
    let classes=alertClass;

    if (this.state.type==="alert") {
      buttonBar=<div className="knossys-alert-buttonbar"><KButton onClick={this.onOk} style={{marginLeft: "auto", marginRight: "auto"}}>Ok</KButton></div>;
    } else {
      if (this.state.type==="confirm") {
        buttonBar=<div className="knossys-alert-buttonbar"><KButton onClick={this.onYes} style={{marginLeft: "auto", marginRight: "3px"}}>Ok</KButton><KButton onClick={this.onNo} style={{marginLeft: "3px", marginRight: "auto"}}>Cancel</KButton></div>;
      } else {
        buttonBar=<div className="knossys-alert-buttonbar"><KButton onClick={this.onOk} style={{marginLeft: "auto", marginRight: "auto"}}>Ok</KButton></div>;
      }
    }    

    return (<div className={classes}>
      <div className="knossys-alert-title">{this.state.title}</div>
      <div className="knossys-alert-content">{this.state.message}</div>
      {buttonBar}
      </div>);
  }
}
 
export default KAlert;
