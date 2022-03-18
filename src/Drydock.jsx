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
import KRadioList from './lib/components/KRadioList';
import KHorizontalSeparator from './lib/components/KHorizontalSeparator';
import KSelect from './lib/components/KSelect';
import KToggleSwitch from './lib/components/KToggleSwitch';
import KAccordion from './lib/components/KAccordion';
import KTabs from './lib/components/KTabs';
import KTree from './lib/components/KTree';
import KToolbar from './lib/components/KToolbar';
import KToolbarItem from './lib/components/KToolbarItem';
import KWaitSpinner from './lib/components/KWaitSpinner';
import KMultiRangeSlider from './lib/components/KMultiRangeSlider';

import './lib/components/styles/misc.css';
import './lib/components/styles/accordion.css';
import './lib/components/styles/driver.css';
import './Drydock.css';

const listRegular = [
  {
    name: "Banana",
    checked: true
  },
  {
    name: "Apple",
    checked: false
  },
  {
    name: "Orange",
    checked: true
  },
  {
    name: "Tomato",
    checked: false
  }
];

const listRadio = [
  {
    name: "Banana",
    checked: true
  },
  {
    name: "Apple",
    checked: false
  },
  {
    name: "Orange",
    checked: false
  },
  {
    name: "Tomato",
    checked: false
  }
];

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
      spinnerType: KWaitSpinner.SPINNER_STYLE_01,
      tinytext: "Tiny",
      regulartext: "Regular",
      mediumtext: "Medium",
      largetext: "Large",
      hexvalue: "0x04",
      floatvalue: "0.1",
      intvalue: "0",
      binaryvalue: "0"
    };

    this.handleChangeTiny=this.handleChangeTiny.bind(this);
    this.handleChangeRegular=this.handleChangeRegular.bind(this);
    this.handleChangeMedium=this.handleChangeMedium.bind(this);
    this.handleChangeLarge=this.handleChangeLarge.bind(this);

    this.checklistChecked=this.checklistChecked.bind(this);
    this.radiolistChecked=this.radiolistChecked.bind(this);    
    this.onToolbarItemClick=this.onToolbarItemClick.bind(this);
    this.onToggleChange=this.onToggleChange.bind(this);
    this.onTreebarItemClick=this.onTreebarItemClick.bind(this);
    this.onTreeNodeSelect=this.onTreeNodeSelect.bind(this);

    this.onAlert=this.onAlert.bind(this);
    this.onConfirm=this.onConfirm.bind(this);
    this.onPrompt=this.onPrompt.bind(this);

    this.handleChangeHex=this.handleChangeHex.bind(this);
    this.handleChangeInteger=this.handleChangeInteger.bind(this);
    this.handleChangeFloat=this.handleChangeFloat.bind(this);
    this.handleChangeBinary=this.handleChangeBinary.bind(this);
  }

  /**
   *
   */
  handleChangeTiny (aValue) {
    this.setState({
      tinytext: aValue
    });
  }

  /**
   *
   */
  handleChangeRegular (aValue) {
    this.setState({
      regulartext: aValue
    });
  }

  /**
   *
   */
  handleChangeMedium (aValue) {
    this.setState({
      mediumtext: aValue
    });
  }

  /**
   *
   */
  handleChangeHex (aValue) {
    this.setState({
      hexvalue: aValue
    });
  }

  /**
   *
   */
  handleChangeInteger (aValue) {
    this.setState({
      intvalue: aValue
    });
  }

  /**
   *
   */
  handleChangeFloat (aValue) {
    this.setState({
      floatvalue: aValue
    });
  }    

  /**
   *
   */
  handleChangeBinary (aValue) {
    this.setState({
      binaryvalue: aValue
    });
  }      

  /**
   *
   */
  handleChangeLarge (aValue) {
    this.setState({
      largetext: aValue
    });
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
  onPrompt () {
    window.knossys.prompt ("Please enter your name", "Harry Potter");
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
    console.log ("checklistChecked ()");
    //console.log (JSON.stringify (aList, null, 2));

  }

  /**
   *
   */
  radiolistChecked (aList) {
    console.log ("radiolistChecked ()");
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

       <div className="klabel" style={{position: "absolute", top: "8px", left:"8px", fontSize: "15pt"}}>Built-in Component Palette</div>

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

       <KnossysInfoPanel label="Text Input" style={{left: "250px", top: "50px", width: "200px", height: "350px"}}>
          <KTextInput size={KTextInput.TINY} style={{width: "100%"}} value={this.state.tinytext} handleChange={this.handleChangeTiny}></KTextInput>

          <br/>

          <KTextInput size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.regulartext} handleChange={this.handleChangeRegular}></KTextInput>

          <br/>

          <KTextInput size={KTextInput.MEDIUM} style={{width: "100%"}} value={this.state.mediumtext} handleChange={this.handleChangeMedium}></KTextInput>

          <br/>

          <KTextInput size={KTextInput.LARGE} style={{width: "100%"}} value={this.state.largetext} handleChange={this.handleChangeLarge}></KTextInput>

          <div className="klabel">Hexadecimal String:</div>

          <KTextInput type={KTextInput.TYPE_HEX} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.hexvalue} handleChange={this.handleChangeHex}></KTextInput>

          <br/>
          <div className="klabel">Integer String:</div>

          <KTextInput type={KTextInput.TYPE_ALPHANUMERIC} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.intvalue} handleChange={this.handleChangeInteger}></KTextInput>          

          <br/>
          <div className="klabel">Float String:</div>

          <KTextInput type={KTextInput.TYPE_ALPHAFLOAT} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.floatvalue} handleChange={this.handleChangeFloat}></KTextInput>

          <br/>
          <div className="klabel">Binary String:</div>

          <KTextInput type={KTextInput.TYPE_BINARY} size={KTextInput.REGULAR} style={{width: "100%"}} value={this.state.binaryvalue} handleChange={this.handleChangeBinary}></KTextInput>

       </KnossysInfoPanel>

       <KnossysInfoPanel label="Lists" style={{left: "50px", top: "243px", height: "268px"}}>

        <KList list={["Banana","Apple","Orange","Tomato"]} />
        
        <KHorizontalSeparator />
        
        <KCheckList list={listRegular} checklistChecked={(list) => this.checklistChecked (list)} />

        <KHorizontalSeparator />

        <KRadioList list={listRadio} radiolistChecked={(list) => this.radiolistChecked (list)} />

       </KnossysInfoPanel>

       <KnossysInfoPanel label="Toolbars" style={{left: "50px", top: "534px", height: "234px"}}>
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

       <KnossysInfoPanel label="Dropdowns" style={{left: "250px", top: "422px", width: "200px", height: "181px"}}>
         <KSelect size={KSelect.TINY} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.REGULAR} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.MEDIUM} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
         <KSelect size={KSelect.LARGE} style={{width: "100%"}} options={["Banana","Apple","Orange","Tomato"]} />
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Toggles" style={{left: "250px", top: "624px", width: "200px", height: "142px"}}>
         <KToggleSwitch id="default" checked={this.state.toggled} onChange={this.onToggleChange}/>
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Global/Environmnent" style={{left: "476px", top: "427px", width: "225px", height: "57px"}}>
          <KButton size={KButton.REGULAR} onClick={this.onAlert} style={{margin: "2px"}}>
          alert
          </KButton>
          <KButton size={KButton.REGULAR} onClick={this.onConfirm} style={{margin: "2px"}}>
          confirm
          </KButton>
          <KButton size={KButton.REGULAR} onClick={this.onPrompt} style={{margin: "2px"}}>
          prompt
          </KButton>                       
       </KnossysInfoPanel>

       <KnossysInfoPanel label="Wait Spinners" style={{left: "476px", top: "505px", width: "227px", height: "267px", display: "flex", flexDirection: "column"}}>
          <div style={{position: "relative", border: "0px solid yellow", flex: "1"}}>            
            <KWaitSpinner type={this.state.spinnerType} style={{top: "5px", width: "32px", height: "32px"}} onClick={(e) => this.changeSpinner(e)}/>
            <KWaitSpinner type={this.state.spinnerType} style={{top: "47px", width: "50px", height: "50px"}} onClick={(e) => this.changeSpinner(e)}/>
            <KWaitSpinner type={this.state.spinnerType} style={{top: "105px", width: "75px", height: "75px"}} onClick={(e) => this.changeSpinner(e)}/>            
            <div className="kreference"><a target="_blank" href="https://codepen.io/nikhil8krishnan/pen/rVoXJa">Original by Nikhil Krishnan</a></div>
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

       <KnossysInfoPanel label="Sliders" style={{left: "975px", top: "51px", width: "226px", height: '350px'}}>
          <KMultiRangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
       </KnossysInfoPanel>       

       <KnossysInfoPanel classes="kbottom-right" />
      </KDriver>
    );
  }
}

export default Drydock;
