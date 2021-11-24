import React, { Component } from 'react';

import KnossysInfoPanel from './lib/components/KnossysInfoPanel';
import KButton from './lib/components/KButton';
import KTextInput from './lib/components/KTextInput';
import KList from './lib/components/KList';
import KCheckList from './lib/components/KCheckList';
import KCheckListItem from './lib/components/KCheckListItem';
import KHorizontalSeparator from './lib/components/KHorizontalSeparator';
import KSelect from './lib/components/KSelect';
import KToggleSwitch from './lib/components/KToggleSwitch';
import KBasicAccordion from './lib/components/KBasicAccordion';
import KAccordion from './lib/components/KAccordion';
import KTabs from './lib/components/KTabs';

import './lib/components/styles/misc.css';
import './lib/components/styles/accordion.css';
import './Drydock.css';

export const accordionData = [
  {
    id: 0,
    title: 'Section 1',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum
    suscipit commodi eum enim atque at? Et perspiciatis dolore iure
    voluptatem.`
  },
  {
    id: 1,
    title: 'Section 2',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
    reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
    quaerat iure quos dolorum accusantium ducimus in illum vero commodi
    pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
    quidem maiores doloremque est numquam praesentium eos voluptatem amet!
    Repudiandae, mollitia id reprehenderit a ab odit!`
  },
  {
    id: 2,
    title: 'Section 3',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
    quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
    dolor ut sequi minus iste? Quas?`
  }
];


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
      toggled: false
    };

    this.checklistChecked=this.checklistChecked.bind(this);
    this.onToggleChange=this.onToggleChange.bind(this);
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
  onToggleChange(aValue) {
    this.setState ({
      toggled: aValue
    });
  }

  /**
   *
   */
  checklistChecked (aList) {
    //console.log ("checklistChecked ()");
    //console.log (JSON.stringify (aList, null, 2));
  }

  /**
   *
   */
  render () {
    let theme="desktopContent knossys-dark";

    return (
      <div className={theme}>
       <KnossysInfoPanel label="Buttons" style={{left: "50px", top: "50px"}}>
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

       <KnossysInfoPanel label="Text Input" style={{left: "250px", top: "50px", width: "200px"}}>
          <KTextInput size={KTextInput.TINY} style={{width: "100%"}}>
          Tiny
          </KTextInput>

          <br/>

          <KTextInput size={KTextInput.REGULAR} style={{width: "100%"}}>
          Regular
          </KTextInput>

          <br/>

          <KTextInput size={KTextInput.MEDIUM} style={{width: "100%"}}>
          Medium
          </KTextInput>

          <br/>

          <KTextInput size={KTextInput.LARGE} style={{width: "100%"}}>
          Large
          </KTextInput>
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Lists" style={{left: "50px", top: "252px", height: "500px"}}>
        <KList />
        
        <KHorizontalSeparator />
        
        <KCheckList checklistChecked={(list) => this.checklistChecked (list)} />

        <KHorizontalSeparator />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Dropdowns" style={{left: "253px", top: "252px", width: "200px", height: "216px"}}>
         <KSelect size={KSelect.TINY} style={{width: "100%"}} />
         <KSelect size={KSelect.REGULAR} style={{width: "100%"}} />
         <KSelect size={KSelect.MEDIUM} style={{width: "100%"}} />
         <KSelect size={KSelect.LARGE} style={{width: "100%"}} />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Toggles" style={{left: "253px", top: "484px", width: "200px", height: "216px"}}>
         <KToggleSwitch id="default" checked={this.state.toggled} onChange={this.onToggleChange}/>
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Basic Accordion" style={{left: "475px", top: "50px", width: "226px", height: '350px', overflowY: 'auto'}}>
        <div className="kaccordion-basic">
          {accordionData.map(({ id, title, content }) => (
            <KBasicAccordion title={title} content={content} />
          ))}
        </div>
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Accordion" style={{left: "475px", top: "421px", width: "226px", height: '350px', overflowY: 'auto'}}>
        <KAccordion data={accordionData} />
       </KnossysInfoPanel>          

       <KnossysInfoPanel label="Tabs" style={{left: "725px", top: "51px", width: "226px", height: '350px'}}>
        <KTabs>
          <div label="Gator">
            See ya later, <em>Alligator</em>!
          </div>
          <div label="Croc">
            After 'while, <em>Crocodile</em>!
          </div>
          <div label="Sarcosuchus">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </KTabs>        
       </KnossysInfoPanel> 

       <KnossysInfoPanel classes="kbottom-right" />
      </div>
    );
  }
}

export default Drydock;
