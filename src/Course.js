import React, { Component } from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faFileAlt, faChalkboardTeacher, faBook, faLaptop } from '@fortawesome/free-solid-svg-icons';
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

    render() {
        
        return (
            <div class="Course">
                WTF IS THIS CALANDER
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

            </div>
        );
    }
}

export default Course;