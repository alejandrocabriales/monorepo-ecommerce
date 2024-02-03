import React, { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
interface Props {
  title: string
  href: string
  icon?: React.ReactElement
  type?: 'primary' | 'secondary'
}

const Button: React.FC<Props> = ({ title, icon, href, type = 'primary' }) => {
  return (

    <Link href={href}>
      <div className={`${styles.button} ${styles[type]}`}>
        <div>{title}</div>
        {icon}
      </div>
    </Link>

  )
}

export default Button