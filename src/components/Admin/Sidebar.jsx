import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to='/Adminhome'><li>HOME</li></Link>
      </ul>
      Registrations
      <ul>
        <Link to='/Category'><li>Category</li></Link>
        <Link to='/Pet'><li>Pet</li></Link>
      </ul>
      View
      <ul>
        <Link to="/Categoryview"><li>Category View</li></Link>
        <Link to="/Petview"><li>Pet View</li></Link>
      </ul>
      Orders
      <ul>
      <Link to="/orderview"><li>Order View</li></Link>
      </ul>
      <ul><Link to='/'><li>Log Out</li></Link></ul>
    </div>
  );
}

export default Sidebar;
