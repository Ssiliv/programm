import {BrowserRouter, 
  Redirect, 
  Route, 
  Switch
} from "react-router-dom";


import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {HomePage,Contacts} from './pages';
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl
} from 'react-bootstrap';


class App extends React.Component {

  render(){
    return (
  <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Main</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/contacts">Contacts</Nav.Link>
    </Nav>
    <Form inline>
    </Form>
  </Navbar>
      <React.StrictMode>
          <BrowserRouter hi>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/contacts" component={Contacts}/>
              </Switch>
          </BrowserRouter>
      </React.StrictMode>
  </>
    );
  }
}
 export default App;
