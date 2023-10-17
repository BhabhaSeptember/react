import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import User from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserForm from "./UserForm";

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <h1></h1>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/edit/:id" element={<UserForm/>} />
              <Route path="/add" element={<UserForm/>} />
              <Route exact path="/" element={<User />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}

// import React, { Component } from "react";
// import * as firebase from "firebase";
// // import { initializeApp } from 'firebase/app';
// // import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// class App extends Component {
//   constructor() {
//     super();
//     console.log(firebase);
//   }
//   render() {
//     return (
//       <div>
//         <h1></h1>
//       </div>
//     );
//   }
// }
// export default App;

// import GitHub from "./GitHub";
// import GitHubUser from "./GitHubUser";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <h1> </h1>
//       </div>
//     );
//   }
// }
// export default App;

// class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/github">GitHub</Nav.Link>
//                 <Nav.Link href="/contact">Contact</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>

//           <Routes>
//             <Route path="/github/user/:login/:id" element={<GitHubUser />} />
//             <Route path="/github" element={<GitHub />} />
//             <Route exact path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }
// class Home extends Component {
//   render() {
//     return <div>Welcome to The Home Page</div>;
//   }
// }
// class NotFound extends Component {
//   render() {
//     return <div>Sorry, Page Not Found</div>;
//   }
// }
// class Contact extends Component {
//   render() {
//     return <div>Contact us on : xyz@mnop.co.za</div>;
//   }
// }

// import * as firebase from 'firebase';

// // Import the functions you need from the SDKs you need
// import {initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyBmcBhmPymbPc10iPhMLzeOVEac4Y480Qw",
//   authDomain: "react-ch9-crud-with-firebase.firebaseapp.com",
//   projectId: "react-ch9-crud-with-firebase",
//   storageBucket: "react-ch9-crud-with-firebase.appspot.com",
//   messagingSenderId: "94685055006",
//   appId: "1:94685055006:web:7f025847411d1e8207860f",
//   measurementId: "G-9S1NDT3XX9" };

//   // Initialize Firebase const
//   app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

// constructor(){
//   super();
//   console.log(firebase);
//   }

// class App extends Component {

//----------------------"<hr>"----------------------//

// import JumboTronComponent from "./JumboTronComponent";
// import Products from "./Products";
// import UserForm from "./UserForm";

//   render() {
//     return (
//       <div>
//          {/* <JumboTronComponent>
//           Have a look at our range of furry pals below. Then enter your details to begin your journey with a purrrring buddy, of your choosing!
//         </JumboTronComponent>

//         <UserForm/>
//         <Products />
//         <Header />
//          <hr></hr>  */}
//          <GitHub />
//           <h1> </h1>

//       </div>
//     );
//   }
// }
// export default App;
