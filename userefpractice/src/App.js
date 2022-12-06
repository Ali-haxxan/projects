import React,{useState,useRef,useEffect} from 'react'

const App = () => {
const [name, setName]=useState('');
  const inputRef= useRef();
  function focus(){
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }
      const countRef = useRef(0);
      
      const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
      };
      console.log('I rendered!');

  return (
    <div>
    <button onClick={handle}>Click me</button>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
      <div>My Name Is: {name}</div>
      <button onClick={focus}>Focus</button>
      {/* <div>I rendered:{renderCount} of time.</div> */}

    </div>
  )
}

export default App