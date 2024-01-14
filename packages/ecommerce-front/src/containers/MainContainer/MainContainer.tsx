import CategoryCard from '@/components/CategoryCard/CategoryCard'
import React from 'react';
import styles from './MainContainer.module.css'
import { useMainContainer } from './useMainContainer';

export const MainContainer = () => {
    const { image, title } = useMainContainer()
    return (
        <div className={styles.container}>
            <CategoryCard title={title} image={image} />
        </div>
    )
}
