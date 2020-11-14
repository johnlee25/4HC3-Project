import React, { Component } from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFileAlt, faChalkboardTeacher, faBook, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [{
                title: "Class",
                start: new Date(2020, 10, 9, 14, 30),
                end: new Date(2020, 10, 9, 15, 30)
            },
            {
                title: "Assignment Due",
                allDay: true,
                start: new Date(2020, 10, 10, 14, 30),
                end: new Date(2020, 10, 10, 17, 0)
            },
            {
                title: "Lab",
                start: new Date(2020, 10, 11, 14, 30),
                end: new Date(2020, 10, 11, 17, 0)
            },
            {
                title: "Lab",
                start: new Date(2020, 10, 12, 10, 30),
                end: new Date(2020, 10, 12, 11, 30)
            },
            {
                title: "Class",
                start: new Date(2020, 10, 13, 12, 30),
                end: new Date(2020, 10, 13, 13, 30)
            },
            {
                title: "Midterm",
                start: new Date(2020, 10, 14, 17, 0),
                end: new Date(2020, 10, 14, 18, 30)
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

    upload() {
        document.getElementById("selectImage").click()
    }

    toFolder() {
        console.log(this.props)
        this.props.sendFolder();
    }

    render() {

        return (
            <div class="Course">
                <Row>
                    <Col>
                        <Row>
                            <Router>
                                <Link to="Notes" class="linking2" >
                                    <div class="list">
                                        <FontAwesomeIcon icon={faCopy} size="8x" onClick={this.toFolder.bind(this)} />
                                        <div class="classNa" onClick={this.toFolder.bind(this)}><b>Notes</b></div>
                                    </div>
                                </Link>
                                <div class="list">
                                    <FontAwesomeIcon icon={faBook} size="8x" />
                                    <div class="classNa" ><b>Homework</b></div>
                                </div>
                                <div class="list">
                                    <FontAwesomeIcon icon={faFileAlt} size="8x" />
                                    <div class="classNa" ><b>Previous Tests</b></div>
                                </div>
                                <div class="list">
                                    <FontAwesomeIcon icon={faChalkboardTeacher} size="8x" />
                                    <div class="classNa"><b>Lectures</b></div>
                                </div>

                            </Router>
                        </Row>
                        <Row class="row no-gutters">
                            <div class="upbtn">
                                <input type="file"
                                    id="selectImage"
                                    style={{ display: 'none' }} />
                                <b><span onClick={this.upload}>UPLOAD&nbsp;</span></b><FontAwesomeIcon icon={faCloudUploadAlt} size="2x" onClick={this.upload} />
                            </div>
                        </Row>
                    </Col>
                    <Col xs="4">
                        <div class="upcoming">
                            <div class="todaysEvents"><b>Upcoming Events</b></div>
                            <div class="upcal">
                                <Calendar
                                    popup
                                    selectable
                                    localizer={localizer}
                                    defaultView={Views.AGENDA}
                                    onSelectEvent={event => alert(event.title)}
                                    onSelectSlot={this.handleSelect}
                                    events={this.state.events}
                                    step={20}
                                    timeslots={3}
                                    view="agenda"
                                    views={["agenda"]}
                                    min={new Date(2020, 0, 1, 8, 0)} // 8.00 AM
                                    max={new Date(2020, 10, 11, 20, 0)} // Max will be 6.00 PM!
                                    date={new Date(2020, 10, 10)}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>


                    <div class="cal">
                        <Calendar
                            popup
                            selectable
                            localizer={localizer}
                            defaultView={Views.WEEK}
                            onSelectEvent={event => alert(event.title)}
                            onSelectSlot={this.handleSelect}
                            events={this.state.events}
                            step={20}
                            timeslots={3}
                            view="week"
                            views={["week"]}
                            min={new Date(2020, 0, 1, 8, 0)} // 8.00 AM
                            max={new Date(2020, 10, 11, 20, 0)} // Max will be 6.00 PM!
                            date={new Date(2020, 10, 10)}
                        />
                    </div>
                </Row>
            </div>
        );
    }
}

export default Course;