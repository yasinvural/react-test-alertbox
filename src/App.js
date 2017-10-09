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
      "alertBox" : [{
        "id":Date.now()+"1",
        "title": "Başarılı",
        "body": "İşleminiz başarıyla gerçekleşti.",
        "type": "success",
        "isOpen":false
      },{
        "id":Date.now()+"2",
        "title": "Hata",
        "body": "İşleminiz gerçekleşirken bir hata oluştu.",
        "type": "error",
        "isOpen":false
      },{
        "id":Date.now()+"3",
        "title": "Bilgi",
        "body": "İşleminizi gerçekleştirebilmek için eksik alanları doldurunuz.",
        "type": "info",
        "isOpen":false
      }]
    });
    this.alertButtonClick = this.alertButtonClick.bind(this);
    this.removeItemFromArray = this.removeItemFromArray.bind(this);
  }
  
  alertButtonClick(type){
    this.setState({
        "alertBox": [
          ...this.state.alertBox,{
          "id": Date.now(),
          "title": document.getElementById("js-title").value,
          "body": document.getElementById("js-body").value ==="" ? "body" : document.getElementById("js-body").value,
          "type": type,
          "isOpen":true          
        }]
    })
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

        <div className="row js-row-container">

            <div className="col-sm-6">
                
                <div className="row js-row-container">

                    <label className="col-sm-4">Title</label>
                    <input className="col-sm-8" placeholder="does not need title for alertbox" id="js-title"  type="text" />

                </div>

            </div>

            <div className="col-sm-6">

                <div className="row js-row-container">

                    <label className="col-sm-4">Body</label>
                    <input className="col-sm-8" id="js-body" type="text" />

                </div>

            </div>

        </div>

        <div className="row js-row-container">
            <div className="col-sm-4">
                <button className="btn btn-success" onClick={()=>{this.alertButtonClick("success")}}>Add Success Alert</button>  
            </div>
            <div className="col-sm-4">
                  <button className="btn btn-danger" onClick={()=>{this.alertButtonClick("error")}}>Add Error Alert</button>  
              </div>
              <div className="col-sm-4">
                    <button className="btn btn-warning" onClick={()=>{this.alertButtonClick("info")}}>Add Info Alert</button> 
              </div> 
        </div>

        <hr/>
        <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
              {
                this.state.alertBox.map( (item,index)=> {
                  return(
                    <AlertBox   key={item.id} 
                                id={item.id}
                                isopen={item.isOpen} 
                                title={item.title} 
                                body={item.body} 
                                type={item.type}
                                handleClick={this.removeItemFromArray} />
                  );
                })
              }
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

export default App;
