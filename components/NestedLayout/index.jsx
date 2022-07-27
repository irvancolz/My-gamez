import React from 'react';
import Layout from '../Layout';
import SideNav from '../SideNav';
import style from './NestedLayout.module.css';

export default function Nestedlayout({children}) {
  
  return (
    <Layout>
        <div className={style.container}>
            <nav className={style.nav}>
              <SideNav />
            </nav>
            <main className={style.content}>
                {children}
            </main>
        </div>
    </Layout>
  )
}
