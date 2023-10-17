//Chapter 4 (Product Component)
// import React, { Component } from 'react';
// import Rating from './Rating';
// import { Card } from 'react-bootstrap';

// class Product extends Component {
//  constructor(props){
//  super(props);
// }
// render() {
//   return (
//     <div>
//               
//             </div>
//   );
//   }
//  }
//  export default Product;




//Ch4 (Using Media)
import React, { Component } from "react";
import Rating from "./Rating";
import {Card} from "react-bootstrap"
// import { Media } from "react-bootstrap";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
  <Card style={{ width: '18rem' }}>
                     <Card.Img variant="top" src={this.props.data.imageUrl} />
                     <Card.Body>
                         <h5>{this.props.data.productName}</h5>
                        {this.props.data.releasedDate}
                         <Rating
                             rating={this.props.data.rating}
                             numOfReviews={this.props.data.numOfReviews}
                        />
                        <p>{this.props.data.description}</p>
                     </Card.Body>
                </Card>
       
      </div>
    );
  }
}


export default Product;





// { <Media>
//<img
 // width={64}
  //height={64}
  //className="mr-3"
  //src={this.props.data.imageUrl}
  //alt="Image"
///>
//<Media.Body>
  //<h5>{this.props.data.productName}</h5>
  //{this.props.data.releasedDate}
  //<Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews}/>
  //<p>{this.props.data.description}</p>
//</Media.Body>
//</Media> } 