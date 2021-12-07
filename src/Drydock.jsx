import React, { Component } from 'react';

import { FaFile, FaFolder, FaFolderOpen } from 'react-icons/fa';
import { MdAddLocation, MdUnfoldMore, MdUnfoldLess } from 'react-icons/md';
import { RiStackshareLine } from 'react-icons/ri';
import { GrUndo, GrRedo } from 'react-icons/gr';
import { AiOutlineFolderOpen, AiOutlineFolder} from 'react-icons/ai';

import KDriver from './lib/components/KDriver';
import KnossysInfoPanel from './lib/components/KnossysInfoPanel';
import KButton from './lib/components/KButton';
import KTextInput from './lib/components/KTextInput';
import KList from './lib/components/KList';
import KCheckList from './lib/components/KCheckList';
import KCheckListItem from './lib/components/KCheckListItem';
import KHorizontalSeparator from './lib/components/KHorizontalSeparator';
import KSelect from './lib/components/KSelect';
import KToggleSwitch from './lib/components/KToggleSwitch';
import KAccordion from './lib/components/KAccordion';
import KTabs from './lib/components/KTabs';
import KTree from './lib/components/KTree';
import KToolbar from './lib/components/KToolbar';
import KToolbarItem from './lib/components/KToolbarItem';
import KWaitSpinner from './lib/components/KWaitSpinner';

import './lib/components/styles/misc.css';
import './lib/components/styles/accordion.css';
import './lib/components/styles/driver.css';
import './Drydock.css';

const accordionData = [
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

const treeData = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    children: ['/root/david', '/root/jslancer'],
  },
  '/root/david': {
    path: '/root/david',
    type: 'folder',
    children: ['/root/david/file1.txt','/root/david/file2.txt','/root/david/file3.txt'],
  },
  '/root/david/file1.txt': {
    path: '/root/david/file1.txt',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/david/file2.txt': {
    path: '/root/david/file2.txt',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/david/file3.txt': {
    path: '/root/david/file3.txt',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/jslancer': {
    path: '/root/jslancer',
    type: 'folder',
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs'],
  },
  '/root/jslancer/projects': {
    path: '/root/jslancer/projects',
    type: 'folder',
    children: ['/root/jslancer/projects/treeview'],
  },
  '/root/jslancer/projects/treeview': {
    path: '/root/jslancer/projects/treeview',
    type: 'folder',
    children: [],
  },
  '/root/jslancer/vblogs': {
    path: '/root/jslancer/vblogs',
    type: 'folder',
    children: [],
  },
};

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
      toggled: false,
      spinnerType: KWaitSpinner.SPINNER_STYLE_01
    };

    this.checklistChecked=this.checklistChecked.bind(this);
    this.onToolbarItemClick=this.onToolbarItemClick.bind(this);
    this.onToggleChange=this.onToggleChange.bind(this);
    this.onTreebarItemClick=this.onTreebarItemClick.bind(this);
    this.onTreeNodeSelect=this.onTreeNodeSelect.bind(this);

    this.onAlert=this.onAlert.bind(this);
    this.onConfirm=this.onConfirm.bind(this);
  }

  /**
   *
   */
  onAlert () {
    console.log ("onAlert ()");
    window.knossys.alert ("Generic alert replacement");
  }

  /**
   *
   */
  onConfirm () {
    window.knossys.confirm ("Generic confirm replacement");
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
  onToolbarItemClick (anItem) {
    console.log ("onToolbarItemClick ()");
    console.log (anItem);
  }

  /**
   *
   */
  onTreebarItemClick (anItem) {
    console.log ("onTreebarItemClick ()");
    console.log (anItem);

    if (anItem=="foldin") {

    }

    if (anItem=="foldopen") {
      
    }    
  }

  /**
   *
   */
  onTreeNodeSelect (anItem) {
    console.log ("onTreeNodeSelect ()");
    console.log (anItem);
  }

  /**
   *
   */
  changeSpinner (e) {
     let currentType=this.state.spinnerType;

     currentType++;

     if (currentType>KWaitSpinner.SPINNER_STYLE_10) {
      currentType=KWaitSpinner.SPINNER_STYLE_01;
     }

     this.setState ({
      spinnerType: currentType
     });
  }

  /**
   *
   */
  render () {
    return (
      <KDriver>
       <KnossysInfoPanel label="Buttons" style={{left: "50px", top: "50px"}}>
          <KButton size={KButton.TINY} onClick={this.onClick} style={{margin: "2px"}}>
          Tiny
          </KButton>

          <br/>

          <KButton size={KButton.REGULAR} onClick={this.onClick} style={{margin: "2px"}}>
          Regular
          </KButton>

          <br/>

          <KButton size={KButton.MEDIUM} onClick={this.onClick} style={{margin: "2px"}}>
          Medium
          </KButton>

          <br/>

          <KButton size={KButton.LARGE} onClick={this.onClick} style={{margin: "2px"}}>
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

       <KnossysInfoPanel label="Lists" style={{left: "50px", top: "252px", height: "197px"}}>
        <KList />
        
        <KHorizontalSeparator />
        
        <KCheckList checklistChecked={(list) => this.checklistChecked (list)} />

        <KHorizontalSeparator />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Toolbars" style={{left: "50px", top: "484px", height: "200px"}}>
        <KToolbar>
          <KToolbarItem onClick={this.onToolbarItemClick}><FaFile /></KToolbarItem>
          <KToolbarItem onClick={this.onToolbarItemClick}><FaFolder /></KToolbarItem>
          <KToolbarItem onClick={this.onToolbarItemClick}><FaFolderOpen /></KToolbarItem>
          <KToolbarItem onClick={this.onToolbarItemClick}><MdAddLocation /></KToolbarItem>
        </KToolbar>

        <br/>

        <KToolbar direction={KToolbar.DIRECTION_VERTICAL}>
          <KToolbarItem onClick={this.onToolbarItemClick}><RiStackshareLine /></KToolbarItem>
          <KToolbarItem onClick={this.onToolbarItemClick}><GrUndo /></KToolbarItem>
          <KToolbarItem onClick={this.onToolbarItemClick}><GrRedo /></KToolbarItem>
          <KToolbarItem onClick={this.onToolbarItemClick}><MdAddLocation /></KToolbarItem>
        </KToolbar>        
       </KnossysInfoPanel>       

       <KnossysInfoPanel label="Dropdowns" style={{left: "253px", top: "252px", width: "200px", height: "216px"}}>
         <KSelect size={KSelect.TINY} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.REGULAR} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.MEDIUM} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.LARGE} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Toggles" style={{left: "253px", top: "484px", width: "200px", height: "216px"}}>
         <KToggleSwitch id="default" checked={this.state.toggled} onChange={this.onToggleChange}/>
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Global/Environmnent" style={{left: "476px", top: "427px", width: "225px", height: "57px"}}>
          <KButton size={KButton.REGULAR} onClick={this.onAlert} style={{margin: "2px"}}>
          alert();
          </KButton>
          <KButton size={KButton.REGULAR} onClick={this.onConfirm} style={{margin: "2px"}}>
          confirm();
          </KButton>                   
       </KnossysInfoPanel>       

       <KnossysInfoPanel label="Wait Spinners" style={{left: "476px", top: "505px", width: "227px", height: "267px", display: "flex", flexDirection: "column"}}>
          <div style={{position: "relative", border: "0px solid yellow", flex: "1"}}>            
            <KWaitSpinner type={this.state.spinnerType} onClick={(e) => this.changeSpinner(e)}/>
            <div className="kreference"><a target="_blank" href="https://codepen.io/nikhil8krishnan">Original by Nikhil Krishnan</a></div>
          </div>
       </KnossysInfoPanel>       

       <KnossysInfoPanel label="Accordion" style={{left: "475px", top: "50px", width: "226px", height: '350px', overflowY: 'auto'}}>
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

       <KnossysInfoPanel label="Tree View" style={{left: "725px", top: "422px", width: "226px", height: '350px'}}>
        <KToolbar>        
          <KToolbarItem onClick={(e) => this.onTreebarItemClick (e,"foldopen")}><AiOutlineFolderOpen /></KToolbarItem>
          <KToolbarItem onClick={(e) => this.onTreebarItemClick (e,"foldin")}><AiOutlineFolder /></KToolbarItem>
        </KToolbar>
         <KTree onSelect={this.onTreeNodeSelect} data={treeData} />
       </KnossysInfoPanel>

       <KnossysInfoPanel classes="kbottom-right" />
      </KDriver>
    );
  }
}

export default Drydock;
