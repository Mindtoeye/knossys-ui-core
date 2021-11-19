import React, { Component } from 'react';

import KnossysInfoPanel from './lib/components/KnossysInfoPanel';
import KButton from './lib/components/KButton';
import KTextInput from './lib/components/KTextInput';
import KList from './lib/components/KList';
import KCheckList from './lib/components/KCheckList';
import KHorizontalSeparator from './lib/components/KHorizontalSeparator';

import './Drydock.css';

/**
 * 
 */
class Drydock extends Component {

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
  onClick (e) {
    console.log ("onClick ()");
  }

  /**
   *
   */
  render () {
    let theme="desktopContent knossys-dark";

    return (
      <div className={theme}>
       <KnossysInfoPanel style={{left: "50px", top: "50px"}}>
          <KButton size={KButton.TINY} onClick={this.onClick}>
          Tiny
          </KButton>

          <br/>

          <KButton size={KButton.REGULAR} onClick={this.onClick}>
          Regular
          </KButton>

          <br/>

          <KButton size={KButton.MEDIUM} onClick={this.onClick}>
          Medium
          </KButton>

          <br/>

          <KButton size={KButton.LARGE} onClick={this.onClick}>
          Large
          </KButton>
       </KnossysInfoPanel>

       <KnossysInfoPanel style={{left: "250px", top: "50px", width: "350px"}}>
          <KTextInput size={KTextInput.TINY}>
          Tiny
          </KTextInput>

          <br/>

          <KTextInput size={KTextInput.REGULAR}>
          Regular
          </KTextInput>

          <br/>

          <KTextInput size={KTextInput.MEDIUM}>
          Medium
          </KTextInput>

          <br/>

          <KTextInput size={KTextInput.LARGE}>
          Large
          </KTextInput>
       </KnossysInfoPanel>

       <KnossysInfoPanel style={{left: "50px", top: "244px", height: "500px"}}>
         <KList />
         <KHorizontalSeparator />
         <KCheckList />
       </KnossysInfoPanel>       

       <KnossysInfoPanel classes="kbottom-right" />
      </div>
    );
  }
}

export default Drydock;
