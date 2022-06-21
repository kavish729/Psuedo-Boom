import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Form = () => {
    const {IsTheme} = useContext(ThemeContext);
  return (
    <div>
        <form className={IsTheme ? "blue" : "yellow"}>
            <div>
                <label>Enter name</label>
                <input type="text" placeholder="Enter name"/>
            </div>
            <div>
                <label>Enter age</label>
                <input type="text" placeholder="Enter age"/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}

export default Form