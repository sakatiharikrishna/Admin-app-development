import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Nav } from 'react-bootstrap';
import { faDashboard, faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Dashboard from '../Pages/Dashboard';


interface Props {

}

const Main: React.FC<Props> = (props) => {

  return (
    <div className='main-content'>
        <Dashboard/>
    </div>
  );
}

export default Main;