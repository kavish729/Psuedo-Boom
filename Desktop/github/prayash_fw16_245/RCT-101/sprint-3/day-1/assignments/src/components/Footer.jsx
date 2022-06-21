import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {

    const {IsTheme,theme, toggle } = useContext(ThemeContext);

  return (
    <div className={`footer ${IsTheme ? 'white' : "black"}`}>
        contact me : prayashchhetri221@gmai.com
    </div>
  )
}

export default Footer