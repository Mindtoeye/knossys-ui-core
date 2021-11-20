
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
  onClick (e) {
    console.log ("Checklist item click");

    let toggle=this.state.checked;

    this.setState ({
      checked: !toggle
    })

    if (this.props.onClick) {
      this.props.onClick(e);
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
      <li className={classes} onClick={(e) => this.onClick (e)}>{this.props.children}</li>
    );
  }
}

export default KCheckListItem;
