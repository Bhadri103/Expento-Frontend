import React from 'react';
import MobileBottomNav from './mobilescreen/MobileBottomNav';


export default function MobileNavbarWrapper({ children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        {children}
      </div>
      <MobileBottomNav/>
    </div>
  );
}


const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minHeight: '100dvh',
  },
}
