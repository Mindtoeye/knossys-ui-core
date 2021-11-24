
import React, { Component } from 'react';

import './styles/lists.css';

/**
 * 
 */
class KCheckListItem extends Component {

  /**
   * 
   */
  constructor (props) {
    super (props);

    this.state = {      
      checked: false
    };

    this.onClick=this.onClick.bind(this);
  }

  /**
   * 
   */
  componentDidMount () {
    //console.log ("componentDidMount ()");

    if (this.props.register) {
      this.props.register(this.props.id);
    }
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
    //console.log ("onClick ("+this.state.checked+")");

    let toggle=this.state.checked;

    // flip the switch
    toggle=!toggle;

    this.setState ({
      checked: toggle
    });

    if (this.props.onItemCheck) {
      this.props.onItemCheck(e,toggle);
    }
  }

  /**
   *
   */
  render () {
    let classes="kcheck-default";

    if (this.state.checked==true) {
      classes="kcheck-checked";
    }

    return (
      <li id={this.props.id} className={classes} onClick={(e) => this.onClick (e)}>{this.props.children}</li>
    );
  }
}

export default KCheckListItem;
