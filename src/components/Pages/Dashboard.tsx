import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Row, Col, Card, InputGroup, Form, Table } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Mocdata } from '../Mocdata';
import { BarChart } from '../Charts/BarChart';
import { DoNutChart } from '../Charts/DoNetChart';


interface Props {

}

const Dashboard: React.FC<Props> = (props) => {

  return (
    <div className='page-content'>
      <div className='page-top d-flex'>
      <h5 className='page-title'>Hello Krishna</h5>
      <InputGroup>
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}  /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </div>
      <Row className='mb-4'>
    {Mocdata.length && Mocdata.map((data)=>
    <Col xs={6} md={3}>
    <Card className='dashboard-card'>
      <Card.Body>
      <div className='d-flex dashboard-flex'>
      <FontAwesomeIcon icon={data.icon}  style={{color:data.iconColor,background:data.iconBg}}/>
      <div className='dashboard-cnt'>
        <p style={{color:'#c5c5c5'}}>{data.name}</p>
        <h4>${data.rate}K</h4>
        <p><span className="bi bi-arrow-up"></span>{data.percentage} this month</p>
      </div>
      </div>
      </Card.Body>
    </Card>
    </Col>
   )}
    </Row>
    <Row className='mb-4'>
    <Col xs={12} md={9}>
    <Card className='chart-card'>
    <BarChart/>
    </Card>
    </Col>
    <Col xs={12} md={3}>
    <Card className='chart-card'>
    < DoNutChart/>
    </Card>
    </Col>
    </Row>
    <Row className='mb-4'>
    <Col xs={12} md={12}>
    <Card className='table-card'>
      <div className='table-top'>
      <h5 className='table-title'>Product Shell</h5>
      <InputGroup>
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faSearch}  /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Select aria-label="Default select example">
      <option>Last 30 days</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </div>
    <Table striped hover>
      <thead>
        <tr>
          <th style={{color: "rgb(164 158 158 / 84%)",textAlign:'left'}}>Product Name</th>
          <th style={{color: "rgb(164 158 158 / 84%)"}}>Stock</th>
          <th style={{color: "rgb(164 158 158 / 84%)"}}>Price</th>
          <th style={{color: "rgb(164 158 158 / 84%)"}}>Total Sales</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abstract 3D</td>
          <td>32 in stock</td>
          <td><b>$ 45.99</b></td>
          <td>20</td>
        </tr>
        <tr>
          <td>Sarphens illustration</td>
          <td>32 in stock</td>
          <td><b>$ 45.99</b></td>
          <td>20</td>
        </tr>
      </tbody>
    </Table>
    </Card>
    </Col>
    </Row>
    </div>
  );
}

export default Dashboard;