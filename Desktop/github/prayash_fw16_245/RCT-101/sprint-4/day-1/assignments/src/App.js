
import { useContext } from 'react'
import './App.css'
import Country from './components/Country'
import { CityContext } from './context/CityContext'

const App = () => {
   const {handleDarkMode,isDark} = useContext(CityContext)
  return (
    <div className={isDark==="light" ? `App` : `darkApp`}>
        <button type="button" className={isDark==="light" ? `btn btn-dark darkbutton` : `btn btn-primary darkbutton`  }  onClick={handleDarkMode}> {isDark === "light" ? "Dark" : "Light"} </button>
        <Country/>
    </div>
  )
}

export default App