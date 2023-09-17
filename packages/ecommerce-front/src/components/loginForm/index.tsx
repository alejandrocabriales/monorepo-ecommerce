import React from 'react';
import styles from './login.module.css';
import Button from '../Button/Button';
import { Logo } from '../svg/Logo';

const LoginForm = () => {


  const handleOnSubmit = async (e:any) => {
    e.preventDefault();
    //TODO: remove this with Post request
    console.log('clicked')
  };

  return (
    <div className={styles.page}>
      <div id="card">
        <div className={styles.cardContent}>
           <div className={styles.logo}><Logo /></div>  
          <form method="post" className={styles.form} onSubmit={handleOnSubmit}>
            <div>
 
            <input
              id="user-email"
              className={styles.formContent}
              type="text"
              name="email"
              placeholder='Email'
              required
            />
            <div className={styles.formBorder}></div>
            </div>
            <div>
     
            <input
              id="user-password"
              className={styles.formContent}
              type="password"
              name="password"
              placeholder='Password'
              required
            />
            <div className={styles.formBorder}></div>
            </div>
             <div className={styles.buttonLogin}> <Button disabled={false}  title='Login' type='submit'/></div>
          </form>
        </div>
      </div>
      
  
    </div>
  );
};

export default LoginForm;
