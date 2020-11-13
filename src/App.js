import React from 'react';
import './App.css';
import Home from './Home.js';
import Course from './Course.js';
import Folder from './Folder.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { heading: "Home", heading2: "Home", headingprev: "" }

    this.startup = this.startup.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.startup);
  }

  startup() {
    var idl = window.location.href.split('/#/')[1];
    if (idl === "Notes") {
      this.setState({
        heading: idl,
        heading2: idl,
        headingprev: "4HC3"
      });
    }
    else if (idl === "4HC3") {
      this.setState({
        heading: idl,
        heading2: idl,
        headingprev: ""
      });
    }
    else {
      this.setState({
        heading: "Home",
        heading2: "Home",
        headingprev: ""
      });
    }
  }

  home() {
    this.setState({
      heading: "Home",
      heading2: "/",
      headingprev: ""
    });
  }

  back() {
    console.log(this.state.heading);
    if (this.state.heading === "Notes") {
      this.setState({
        heading: "4HC3",
        heading2: "4HC3",
        headingprev: "/"
      });
    }
    if (this.state.heading === "4HC3") {
      this.setState({
        heading: "Home",
        heading2: "/",
        headingprev: ""
      });
    }
    console.log(this.state.heading);

  }

  toCourse() {
    this.setState({
      heading: "4HC3",
      heading2: "4HC3",
      headingprev: ""
    });
    console.log(this.props.heading);
  }

  toFolder() {
    this.setState({
      heading: "Notes",
      heading2: "Notes",
      headingprev: "4HC3"
    });
    console.log(this.props.heading);
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
                <Nav.Link as={Link} to={this.state.headingprev} onClick={this.back.bind(this)}><FontAwesomeIcon icon={faAngleLeft} size="lg" onClick={this.back.bind(this)} /> Back</Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar>
        <Route exact path="/" exact render={(props) => <Home  {...props} heading={this.state.heading} sendState={this.toCourse.bind(this)}/>} />
        <Route path="/4HC3" exact render={(props) => <Course  {...props} sendFolder={this.toFolder.bind(this)}/>} />
        <Route path="/Notes" component={Folder} />
      </Router >
    );
  }
}

export default App;
