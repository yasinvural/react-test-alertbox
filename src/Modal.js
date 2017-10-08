import React, {Component} from 'react';
import './Modal.css';


export default class Modal extends Component{
    
    render(){
        return(
            <div className={`js-modal-container  ${this.props.isopen ? "" : "js-hidden"}`} >
                <div className="js-modal-title">
                        {this.props.title}
                </div>
                <div className="js-modal-body">
                    {this.props.body}
                </div>
                <div className="js-modal-footer">
                    This is static footer
                </div>
            </div>
        );
    }
    
}