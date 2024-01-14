
import { PropsWithChildren } from 'react'
import styles from './MainLayout.module.css'

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default MainLayout 