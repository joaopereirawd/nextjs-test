import styles from '../styles/header.module.scss'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__logo}>
                    <img src="/vercel.svg" />
                </div>

                <div className={styles.header__navigation}>
                    <li>
                        <Link href="/">
                            <a href="/">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header;