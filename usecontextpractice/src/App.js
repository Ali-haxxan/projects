import React from 'react'
// import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'
import { ThemeProvider  } from './ThemeContext'

// export const ThemeContext = React.createContext()


const App = () => {
// const [darkTheme, setDarkTheme] = useState(true)

// function toggleTheme(){
//   setDarkTheme(prevDarktheme => !prevDarktheme) 
// }
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
        {/* <ClassContextComponent /> */}
      </ThemeProvider>
    </>
  )
}

export default App