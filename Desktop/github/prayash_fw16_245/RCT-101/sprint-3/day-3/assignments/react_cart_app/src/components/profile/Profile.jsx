import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
         <div>
           <img className={styles.discount} src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/16/d4edb37c-aee8-4989-86f4-33b117edd4bc1647415464555-Banner_Login-Landing-page--1-.jpg" alt="" />
           <div className={styles.login_div}>
            <div className={styles.login_signup}>
              Login<span>&nbsp; or &nbsp;</span>Signup
            </div>
            <div className={styles.inputbox}> 
            <form>
            <input type="text" placeholder="Add email*" />
            <input type="password" placeholder="Add password*" />
            <input type="submit" value="LOGIN" />
            </form>
            </div>
            <div>
             <Link to="/signup" ><span>New to here? Create Account</span></Link>
            </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Profile