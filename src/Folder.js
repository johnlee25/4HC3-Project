import React, { Component } from 'react';
import './Folder.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faSortAmountDown, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Container, ListGroup, Tab } from 'react-bootstrap';
import test1 from './pdf/TEST1.pdf';
import test2 from './pdf/TEST2.pdf';
import test3 from './pdf/TEST3.pdf';
import test4 from './pdf/TEST4.pdf';
import test5 from './pdf/TEST5.pdf';
import test6 from './pdf/TEST6.pdf';
import readmepdf from './pdf/README.pdf';


class Folder extends Component {
    constructor(props) {
        super(props);
    }
    upload() {
        document.getElementById("selectImage").click()
      }

    test(){
        console.log("test");
    }

    render() {
        return (
            <div class="folder">
                <Container fluid={true} >
                    <Tab.Container defaultActiveKey="#link1">
                        <Row>
                            <Col>
                                <div class="vline">
                                    <Row>
                                        <Col></Col>
                                        <Col>
                                            <div class="files"><h4>Files</h4></div>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div class="sort"><b class="size">Sort By </b><FontAwesomeIcon icon={faSortAmountDown} size="lg" /></div>
                                        </Col>
                                        <Col></Col>
                                        <Col>
                                            <div class="upload">
                                                <input type="file"
                                                    id="selectImage"
                                                    style={{ display: 'none' }} />
                                                <b><span onClick={this.upload}>UPLOAD&nbsp;</span></b><FontAwesomeIcon icon={faCloudUploadAlt} size="2x" onClick={this.upload}/>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="1"></Col>
                                        <Col>
                                            <div class="table">

                                                <ListGroup as="ul">
                                                    <ListGroup.Item as="li" variant="secondary" ><b>File Name</b></ListGroup.Item>
                                                    <ListGroup.Item as="li" action variant="secondary" href="#link1" >thermals 1.docx</ListGroup.Item>
                                                    <ListGroup.Item as="li" action variant="secondary" href="#link2" >thermals 3.docx</ListGroup.Item>
                                                    <ListGroup.Item as="li" action variant="secondary" href="#link3" >fluids ex 1.jpeg</ListGroup.Item>
                                                    <ListGroup.Item as="li" action variant="secondary" href="#link4" >thermals 4.docx</ListGroup.Item>
                                                    <ListGroup.Item as="li" action variant="secondary" href="#link5" >fluids 5.docx</ListGroup.Item>
                                                    <ListGroup.Item as="li" action variant="secondary" href="#link6" >thermals 6.pdf</ListGroup.Item>
                                                    <ListGroup.Item as="li" action variant="secondary" href="#link7" >thermals - jjs notes.pdf</ListGroup.Item>
                                                </ListGroup>


                                            </div>
                                        </Col>
                                        <Col xs="1"></Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col >
                                <div class="pdf">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#link1">
                                            <div class="docHead">Document Preview &nbsp;
                                                <a href={test1} target='_blank'><FontAwesomeIcon icon={faSearchPlus} size="lg" /></a>
                                            </div>
                                            <embed src={test1} width="700px" height="700px" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link2">
                                            <div class="docHead">Document Preview &nbsp;
                                                <a href={test2} target='_blank'><FontAwesomeIcon icon={faSearchPlus} size="lg" /></a>
                                            </div>
                                            <embed src={test2} width="700px" height="700px" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link3">
                                            <div class="docHead">Document Preview &nbsp;
                                                <a href={test3} target='_blank'><FontAwesomeIcon icon={faSearchPlus} size="lg" /></a>
                                            </div>
                                            <embed src={test3} width="700px" height="700px" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link4">
                                            <div class="docHead">Document Preview &nbsp;
                                                <a href={test4} target='_blank'><FontAwesomeIcon icon={faSearchPlus} size="lg" /></a>
                                            </div>
                                            <embed src={test4} width="700px" height="700px" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link5">
                                            <div class="docHead">Document Preview &nbsp;
                                                <a href={test5} target='_blank'><FontAwesomeIcon icon={faSearchPlus} size="lg" /></a>
                                            </div>
                                            <embed src={test5} width="700px" height="700px" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link6">
                                            <div class="docHead">Document Preview &nbsp;
                                                <a href={readmepdf} target='_blank'><FontAwesomeIcon icon={faSearchPlus} size="lg" /></a>
                                            </div>
                                            <embed src={readmepdf} width="700px" height="700px" />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#link7">
                                            <div class="docHead">Document Preview &nbsp;
                                                <a href={test6} target='_blank'><FontAwesomeIcon icon={faSearchPlus} size="lg" /></a>
                                            </div>
                                            <embed src={test6} width="700px" height="700px" />
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
        );
    }
}

export default Folder;