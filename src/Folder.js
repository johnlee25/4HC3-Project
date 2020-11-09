import React, { Component } from 'react';
import './Folder.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Container } from 'react-bootstrap';


class Folder extends Component {

    render() {
        return (
            <div class="folder">
                <Container fluid={true} >
                    <Row>
                        <Col>
                            <div class="vline">
                                <Row>
                                    <Col></Col>
                                    <Col>
                                    <div class="files"><h5>Files</h5></div>
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <Col>
                                    Filter
                                    </Col>
                                    <Col></Col>
                                    <Col>
                                    <div class="upload">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} size="2x"/>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col >
                            te
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Folder;