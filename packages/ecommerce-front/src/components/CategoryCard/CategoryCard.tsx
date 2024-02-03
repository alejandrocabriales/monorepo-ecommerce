import Image from 'next/image';
import React, { useState } from 'react'
import Button from '../Button/Button';
import styles from './CategoryCard.module.css'
import DescriptionItem from './DescriptionItem/DescriptionItem';


interface Props {
    title: string;
    description?: string;
    image: string
}

const CategoryCard: React.FC<Props> = ({ title, description, image }) => {
    return (
        <div className={styles.product}>
            <div className={styles.figure}>
                <Image src="https://picsum.photos/id/1011/800/450" alt="img" layout='fill' objectFit='cover' />
            </div>
            <div className={styles.description}>
                <div className={styles.details}>
                    <DescriptionItem label='Producto:' value='Arroz Basmati' />
                    <DescriptionItem label='Cantidad:' value='1kg' />
                    <DescriptionItem label='Precio:' value='200CUP' />
                </div>
                <Button title='Ver mas detalles' href='#' />
            </div>
        </div>

    )

}


export default CategoryCard