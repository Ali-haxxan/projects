import React, {useState,useEffect,useMemo} from 'react'

const App = () => {
  const [number,setNumber]= useState(0)
  const [dark,setDark]= useState(false)
  // const doubleNumber = slowFunction(number)
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  },[number])
  
  function slowFunction(num){
    console.log('calling slow function!')
    for(let i = 0; i<=1000000000 ; i++){
  
    }
    return num*2;
  }
  const themeStyle = useMemo(()=>{
    return{
      backgroundColor: dark ? 'white' : 'black',
      color: dark ? 'black' : 'white',
    }
  },[dark])
  
  useEffect(()=>{
    console.log('theme changed!')
  },[themeStyle])

  return (
    <div>
      <input type={number} value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
      <button onClick={()=> setDark(prevDark => !prevDark)}> Change Theme</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}

export default App
