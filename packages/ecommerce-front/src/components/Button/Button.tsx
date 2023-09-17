import React, { ButtonHTMLAttributes } from 'react'
import styles from  '../Button/button.module.css'
interface Props{
    title:string
    onClick?:()=>void
    disabled:boolean
    type?: "submit" | "reset" | "button";
}

 const Button:React.FC<Props> = ({title,onClick,disabled,type='button'}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button} type={type}>{title}</button>
  )
}

export default Button