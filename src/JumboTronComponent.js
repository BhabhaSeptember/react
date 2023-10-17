import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap'

class JumboTronComponent extends Component {

  constructor(props){
    super(props);    
  }

  render() { 
    return (
      <div>                
        
            <h1> <u>Welcome to Cat-rescue!</u> </h1>
            
            <p>{this.props.children}</p>
            <p><Button variant="danger">Learn more</Button></p>
            <hr></hr>                                                                                                                         
      </div>
    );
  }  
}

export default JumboTronComponent;
