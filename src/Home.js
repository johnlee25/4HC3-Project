import React, { Component } from 'react';
import './Home.css';
import Course from './Course.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], nextID: 0, editIndex: 0, input: "" }
    }

    create() {
        let errormsg = document.getElementById("err");
        if (this.state.input !== "") {
            errormsg.style.display = "none";
            this.setState({
                nextID: this.state.nextID + 1,
                input: "",
                items: [...this.state.items,
                { title: this.state.input, id: this.state.nextID + 1 }]
            })
        }
        else {
            errormsg.style.display = "inline-block";
            errormsg.innerHTML = "Field Is Blank";
        }
    }

    render() {
        return (
            <div class="home">
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <div class="heading">New Course</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="3">
                                <div class="inputbox">
                                    <Form.Control type="text" class="inputList" placeholder="Enter Course Name"
                                        onChange={(event) => this.setState({ input: event.target.value })}
                                        value={this.state.input} />
                                    <div id="err"></div>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <Button variant="primary" onClick={this.create.bind(this)}>Create</Button>
                            </Col>
                        </Row>
                        <div style={{ marginBottom: '50px' }}></div>
                        <Router>
                            <Link to="Course" class="linking">
                                <div class="list"> <FontAwesomeIcon icon={faBookOpen} size="9x" />
                                    <div class="classNa"><b>4HC3</b></div>
                                </div>
                            </Link>
                            {this.state.items.map(
                                ({ title, id }) =>
                                    <Link to="Course" class="linking">
                                        <div class="list"> <FontAwesomeIcon icon={faBookOpen} size="9x" />
                                            <div class="classNa"><b>{title}</b></div>
                                        </div>
                                    </Link>
                            )}
                            <Route path="/Course" component={Course} />
                        </Router>
                    </Col>
                    <Col xs="4">
                        <div class="upcoming">
                            This is where the upcoming events will go
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;