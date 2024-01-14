import Image from 'next/image';
import React from 'react'
import styles from './CategoryCard.module.css'


interface Props {
    title: string;
    description?: string;
    image: string
}

const CategoryCard: React.FC<Props> = ({ title, image }) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={image} alt='Picture' layout='fill' />
            </div>
            <div className={`${image ? styles.titleWithImage : styles.titleWithNoImage}`}>{title}</div>

        </div>
    )
}


export default CategoryCard