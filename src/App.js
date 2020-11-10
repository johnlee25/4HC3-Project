import React from 'react';
import './App.css';
import Home from './Home.js';
import Course from './Course.js';
import Folder from './Folder.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft  } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heading: "Home" }
  }
  render() {
    return (
      <Router>
        <Navbar variant="temp" className="headbg" >
          <Nav>
          <Row>
            <Col>
              <Navbar.Brand as={Link} to="/" >CourseAlly</Navbar.Brand>
            </Col>
            
              <Col>
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/Course" >Course</Nav.Link>
                <Nav.Link as={Link} to="/Folder" >Folder</Nav.Link>
              </Col>
          
              <Col>
                <Nav.Link as={Link} to="/Folder" >{this.state.heading}</Nav.Link>
                <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faAngleLeft} size="lg" /> Back</Nav.Link>
              </Col>
            
          </Row>
          </Nav>
        </Navbar>

        <Route exact path="/" component={Home} />
        <Route path="/Course" component={Course} />
        <Route path="/Folder" component={Folder} />
      </Router >
    );
  }
}

export default App;
