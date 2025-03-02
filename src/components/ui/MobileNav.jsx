import React from 'react';
import SelectLocation from './SelectLocation'; 
import { FaBell, FaMapMarkerAlt, FaSearch } from 'react-icons/fa'; 

export default function MobileNav() {
  return (
    <div style={styles.nav}>
      <header style={styles.header}>
        <div style={styles.locationContainer}>
          <div className='d-flex align-items-center'>
            <img src="/assets/location.svg" alt="" />
            <SelectLocation />
          </div>
          <img src="/assets/circle_notifications.svg" alt="" />
        </div>
        <div style={styles.searchBar}>
          <div style={styles.searchIcon}>
            <FaSearch style={{ color: '#333' }} />
          </div>
          <input type="text" placeholder="Search" style={styles.searchBar.input} />
        </div>
      </header>
      <div style={styles.deliveryNotification}>
        <span>Zappping Delivery in 14 mins</span>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    fontFamily: 'Arial, sans-serif',
    position: 'sticky',
    top: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
    padding: '10px 15px',
    borderBottom: '1px solid #e0e0e0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 1000,
    background: '#0B2C47',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
  homeText: {
    fontSize: '16px',
    color: '#333',
  },
  searchBar: {
    width: '100%',
    position: 'relative',
    input: {
      padding: '5px 10px 5px 35px', 
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '14px',
      height: '40px',
      width: '100%',
      outline: 'none', 
    },
  },
  searchIcon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  },
  deliveryNotification: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: '10px',
    width: '100%',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '8px',
  },
};