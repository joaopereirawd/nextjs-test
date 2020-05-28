import Header from '../header';
import styles from '../../styles/content-wrapper.module.scss'

const MainLayout = ({ children }) => (
    <div className="main-container">
        <Header />

        <div className={styles.wrapper}>
            {children}
        </div>

        <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    `}</style>
    </div>
);

export default MainLayout;