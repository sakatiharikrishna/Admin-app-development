import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Nav } from 'react-bootstrap';
import { faDashboard, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';


interface Props {

}

const Sidebar: React.FC<Props> = (props) => {

  return (
    <div className='sidename'>
        <div className='d-flex app-header'>
        <FontAwesomeIcon icon={faDashboard} />
        <h4>Dashboard</h4>
        </div>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/dashboard">
      <FontAwesomeIcon icon={faDashboard} />
 Dashboard</Nav.Link>
      <Nav.Link eventKey="products"> <FontAwesomeIcon icon={faDashboard} />Products</Nav.Link>
      <Nav.Link eventKey="customers"> <FontAwesomeIcon icon={faUser} />Customers</Nav.Link>
      <Nav.Link eventKey="income"> <FontAwesomeIcon icon={faUser} />Income <FontAwesomeIcon icon={faChevronRight} className='submenu-chevicon'/> </Nav.Link>
      <Nav.Link eventKey="promote"> <FontAwesomeIcon icon={faUser} />Promote</Nav.Link>
      <Nav.Link eventKey="help"> <FontAwesomeIcon icon={faUser} />Help</Nav.Link>

    </Nav>
    </div>
  );
}

export default Sidebar;