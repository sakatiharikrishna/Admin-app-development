import React from 'react';
import {Row, Col, Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar/Sidebar';
import "./css/master.scss";
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <Container fluid >
         <Row className='p-0'>
        <Col lg={2} className='sidebar-grid'><Sidebar/></Col>
        <Col lg={10} className='main-grid'><Main/></Col>
     </Row>
     </Container>
    </div>
  );
}

export default App;
