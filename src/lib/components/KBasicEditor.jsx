import React from "react";
import ReactDOM from "react";

import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";

import KToolbar from './KToolbar';
import KToolbarItem from './KToolbarItem';

import { GrUndo, GrRedo } from 'react-icons/gr';
import { CgFormatItalic, CgFormatBold, CgFormatHeading, CgLink } from 'react-icons/cg';


import './styles/editable.css';

const sanitizeConf = {
  allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
  allowedAttributes: { a: ["href"] }
};

/**
 * Via: https://codesandbox.io/s/l91xvkox9l?file=/src/styles.css:0-214
 */
class KBasicEditor extends React.Component {

  /**
   * 
   */
  constructor(props) {
    super(props);

    this.state = {
      html: `<p>Hello <b>World</b> !</p><p>Paragraph 2</p>`,
      editable: true
    };
  }

  /**
   * 
   */
  handleChange = evt => {
    //console.log ("handleChange ()");

    this.setState({ html: evt.target.value });

    if (this.props.onEditChange) {
      this.props.onEditChange (evt.target.value);
    }
  };

  /**
   * 
   */
  sanitize = () => {
    this.setState({ html: sanitizeHtml(this.state.html, sanitizeConf) });
  };

  /**
   * 
   */
  toggleEditable = () => {
    this.setState({ editable: !this.state.editable });
  };

  /**
   * 
   */
  render = () => {
    return (
      <div className="keditor">
        <KToolbar>        
          <KToolbarItem onClick={(e) => this.onEditItalic (e)}><CgFormatItalic /></KToolbarItem>
          <KToolbarItem onClick={(e) => this.onEditBold (e)}><CgFormatBold /></KToolbarItem>
          <KToolbarItem onClick={(e) => this.onEditHeading (e)}><CgFormatHeading /></KToolbarItem>
          <KToolbarItem onClick={(e) => this.onEditLink (e)}><CgLink /></KToolbarItem>                    
          <KToolbarItem onClick={(e) => this.onEditToggle (e)} toggle={true}>Edit</KToolbarItem> 
        </KToolbar>      
        <div className="keditcontainer">
          <ContentEditable
            className="keditable"
            tagName="pre"
            html={this.state.html} // innerHTML of the editable div
            disabled={!this.state.editable} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
            onBlur={this.sanitize}
          />
        </div>
      </div>
    );
  };
}

export default KBasicEditor;
