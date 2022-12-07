import React from 'react'
import { useTheme } from './ThemeContext'
import { useThemeUpdate } from './ThemeContext'

const FunctionContextComponent = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    background: darkTheme? '#333' : '#ccc',
    color: darkTheme? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
}
  return (
    <>
      <button  onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyles}>FunctionContextComponent</div>
    </>
  )
}

export default FunctionContextComponent