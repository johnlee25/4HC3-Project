import React, { Component } from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy,faFileAlt,faChalkboardTeacher, faBook,faLaptop } from '@fortawesome/free-solid-svg-icons';


class Course extends Component {

    render() {
        return (
            <div class="Course">
                <h1 class="title"> Live Course Table</h1>
            </div>
        );
    }
}

export default Course;