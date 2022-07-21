import React from 'react';
import Layout from '../Layout';
import SideNav from '../SideNav';
import styles from './NestedLayout.module.css';

export default function Nestedlayout({children}) {
  
  return (
    <Layout>
        <div className={styles.container}>
            <SideNav />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    </Layout>
  )
}
