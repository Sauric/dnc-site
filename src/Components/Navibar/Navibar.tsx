import React from 'react';
import './Navibar.css';
import { Link } from 'react-router-dom';
import Burger from '../../Images/orange-bagel.svg';

const Navibar: React.FC = () => {
  return (
    <div>
      <nav>
        <img src={Burger} alt='Burg' className='burger'></img>
        <div className='bar'>
          <Link className='naviElement' to='/'>Home</Link>
          <div className="bar-elements-line"/>
          <Link className='naviElement' to='/accounting'>Accounting</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navibar;
