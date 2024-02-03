import React from 'react';
import styles from './DescriptionItem.module.css'

interface Props {
    label: string
    value: string
}

const DescriptionItem: React.FC<Props> = ({ label, value }) => {
    return (
        <div className={styles.container}>
            <div className={styles.label}>{label}</div>
            <div className={styles.product}>{value}</div>
        </div>
    )
}
export default DescriptionItem