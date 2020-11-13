import React, { Component } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [], nextID: 0, editIndex: 0, input: "", events: [{
                title: "3Y04 Class",
                start: new Date(2020, 10, 10, 9, 30),
                end: new Date(2020, 10, 10, 10, 30)
            },
            {
                title: "Example of Todays Events For All Classes",
                allDay: true,
                start: new Date(2020, 10, 10, 14, 30),
                end: new Date(2020, 10, 10, 17, 0)
            },
            {
                title: "4HC3 Lab",
                start: new Date(2020, 10, 10, 14, 30),
                end: new Date(2020, 10, 10, 17, 0)
            },
            {
                title: "4PK4 Class",
                start: new Date(2020, 10, 10, 12, 30),
                end: new Date(2020, 10, 10, 13, 30)
            },
            {
                title: "3RA3 Midterm",
                start: new Date(2020, 10, 10, 17, 0),
                end: new Date(2020, 10, 10, 18, 30)
            }]
        }
    }

    handleSelect = ({ start, end }) => {
        const title = window.prompt('New Event name')
        if (title)
            this.setState({
                events: [
                    ...this.state.events,
                    {
                        title,
                        start,
                        end
                    },
                ],
            })
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

    toCourse() {
        console.log(this.props)
        this.props.sendState();
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
                            <Col xs="5">
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
                            {this.state.items.map(
                                ({ title, id }) =>
                                    <Link to="4HC3" class="linking" >
                                        <div class="list">
                                            <FontAwesomeIcon icon={faBookOpen} size="9x" onClick={this.toCourse.bind(this)} />
                                            <div class="classNa" onClick={this.toCourse.bind(this)}><b>{title}</b></div>
                                        </div>
                                    </Link>
                            )}
                        </Router>
                    </Col>
                    <Col xs="4">
                        <div class="upcoming">
                            <div class="todaysEvents"><b>Todays Events</b></div>
                            <div class="upcal">
                                <Calendar
                                    popup
                                    selectable
                                    localizer={localizer}
                                    defaultView={Views.DAY}
                                    onSelectEvent={event => alert(event.title)}
                                    onSelectSlot={this.handleSelect}
                                    events={this.state.events}
                                    step={20}
                                    timeslots={3}
                                    view="day"
                                    views={["day"]}
                                    min={new Date(2020, 0, 1, 8, 0)} // 8.00 AM
                                    max={new Date(2020, 10, 11, 20, 0)} // Max will be 6.00 PM!
                                    date={new Date(2020, 10, 10)}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;