import React, {Component} from 'react';
import './AlertBox.css';

export default class AlertBox extends Component{

    

    render(){
        let type = this.props.type;
        let iconClass;
        switch(type){
            case "info":
                iconClass = "glyphicon glyphicon-info-sign";
            break;
            case "success":
                iconClass = "glyphicon glyphicon-thumbs-up";
            break;
            case "error":
                iconClass = "glyphicon glyphicon-thumbs-down"
            break;
            default:
                iconClass = "";
            break;
        }

        return(
            <div className={`js-alertbox-container ${this.props.type} ${this.props.isopen ? "" : "js-hidden"}`}>
                <div className="js-alertbox-body">
                    <div className="row">
                        <div className="col-sm-4 js-icon js-left">
                            <span className={`${iconClass}`}></span>
                        </div>
                        <div className="col-sm-4 js-text">
                            {this.props.body}
                        </div>
                        <div className="col-sm-4 js-close-button js-right">
                            <span   onClick={()=>{this.props.handleClick(this.props.id)}} 
                                    className="glyphicon glyphicon-remove "></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}