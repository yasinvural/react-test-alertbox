import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AlertBox from './AlertBox';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {
  constructor(props){
    super(props);
    this.state = ({
      "isModalOpen":false,
      "isAlertBoxOpen":false,
      "title": "başarılı" ,
      "position":"top-right",
      "alertBox" : []
    });
    this.alertButtonClick = this.alertButtonClick.bind(this);
    this.removeItemFromArray = this.removeItemFromArray.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
  
  handleOptionChange(e){
      this.setState({
        "position": this.state.alertBox.length === 0 ? e.target.name : this.state.position
      })
  }

  alertButtonClick(type){
    this.setState({
        "alertBox": [
          ...this.state.alertBox,{
          "id": Date.now(),
          // "title": document.getElementById("js-title").value,
          "body": document.getElementById("js-body").value ==="" ? "body" : document.getElementById("js-body").value,
          "type": type,
          "isOpen":true                   
        }]
    },this.removeItemInOrder);
  }

  removeItemInOrder(){
      setTimeout(()=>{
          this.removeItemFromArray(this.state.alertBox[0].id);
      },2000);
  }

  removeItemFromArray(id){            
      let index = this.state.alertBox.findIndex((el)=>{
          return el.id === id;
      });

      this.setState({
        "alertBox": this.state.alertBox.filter((_, i) => i !== index)
      });
  }


  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Alert Box</h1>
        </header>

        <div className="row">
            <div className="col-sm-4 col-sm-push-4">
                <div className="form-group">
                    <label>Body</label>
                    <input type="text" placeholder="type it" className="form-control text-center" id="js-body"/>
                </div>
                <div className="radio">
                  <label><input type="radio" 
                                name="top-right" 
                                checked={this.state.position === "top-right"}
                                onChange={this.handleOptionChange}/>Top right</label>
                </div>
                <div className="radio">
                  <label><input type="radio" 
                                name="top-left" 
                                checked={this.state.position === "top-left"}
                                onChange={this.handleOptionChange}/>Top left</label>
                </div>
                <div className="radio">
                  <label><input type="radio" 
                                name="bottom-right" 
                                checked={this.state.position === "bottom-right"}
                                onChange={this.handleOptionChange}/>Bottom right</label>
                </div>
                <div className="radio">
                  <label><input type="radio" 
                                name="bottom-left" 
                                checked={this.state.position === "bottom-left"}
                                onChange={this.handleOptionChange}/>Bottom left</label>
                </div>
                <div>
                  <button className="btn btn-success"  onClick={()=>{this.alertButtonClick("success")}}>Add Success Alert</button> 
                </div>
                <div>
                  <button className="btn btn-danger" onClick={()=>{this.alertButtonClick("error")}}>Add Error Alert</button>
                </div>
                <div>
                  <button className="btn btn-warning" onClick={()=>{this.alertButtonClick("info")}}>Add Info Alert</button> 
                </div>
            </div>

        </div>

        <hr/>

          <div className={`js-alertbox-show-container ${this.state.position}`}>
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                  {
                    this.state.alertBox.map((item,index)=> {
                        return(
                          <AlertBox   key={item.id} 
                                      id={item.id}
                                      isopen={item.isOpen} 
                                      title={item.title} 
                                      body={item.body} 
                                      type={item.type}
                                      position={item.position}
                                      handleClick={this.removeItemFromArray} />
                        );
                    })
                  }
            </ReactCSSTransitionGroup>
        </div>

      </div>
    );
  }
}

export default App;
