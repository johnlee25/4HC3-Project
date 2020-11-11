import React from 'react';
import './App.css';
import Home from './Home.js';

import Folder from './Folder.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft  } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heading: "Folder", heading2:"Folder", headingprev:"" }

    this.startup=this.startup.bind(this);
  }

  componentDidMount(){
    window.addEventListener('load', this.startup);
  }

  startup(){
    var idl=window.location.href.split('/#/')[1];
    this.setState({
      heading: idl,
      heading2: idl,
    });
  }

  home(){
    this.setState({
      heading: "Home",
      heading2: "/",
      headingprev:""
    });
  }

  back(){
    console.log(this.state.heading);
    if(this.state.heading==="Folder"){
      this.setState({
        heading: "Course",
        heading2: "Course",
        headingprev:"/"
      });
    }
    if(this.state.heading==="Course"){
      this.setState({
        heading: "",
        heading2: "/",
        headingprev:""
      });
    }
    console.log(this.state.heading);

  }

  render() {
    return (
      <Router>
        <Navbar variant="temp" className="headbg" >
          <Nav>
          <Row>
            <Col>
              <Navbar.Brand as={Link} to="/" onClick={this.home.bind(this)}>CourseAlly</Navbar.Brand>
            </Col>
              <Col>
              <Nav.Link as={Link} >{this.state.heading}</Nav.Link>
              </Col>
              <Col>
                <Nav.Link as={Link} to={this.state.headingprev} onClick={this.back.bind(this)}><FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={this.back.bind(this)}/> Back</Nav.Link>
              </Col>
          </Row>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        
        <Route path="/Folder" component={Folder} />
      </Router >
    );
  }
}

export default App;
