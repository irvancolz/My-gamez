import styles from './Layout.module.css';
import Topnav from '../Topnav';
import { ToastContainer } from 'react-toastify';
import Context from "../../Context";

export default function Layout({ children}) {
  const {SideNavContext} = Context();
  return (
    <SideNavContext>
      <div className={styles.container}>
        <ToastContainer />
        <Topnav />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </SideNavContext>
  );
}