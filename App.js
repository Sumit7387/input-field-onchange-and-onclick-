import {useState} from 'react'
import './App.css';
import Demo from './Demo'

function App() 
{
  const [data,setData]=useState(null)
  const [print,setPrint]=useState(false)


  function getData(val)
  {
    console.log(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  
  const[name,setName]=useState("Sumit")
  return (
    <div className="App">
      {
        
       print?
       <h1> {data}</h1>
       :null

      }
     
     <input type="text" onChange={getData} />
     <br />
     <br />
     <button onClick={()=>setPrint(true)} >Print Data</button>
     <Demo name={name} />

     <button onClick={()=>{setName("Dhamanekar")}}>Update Name</button>
     
    </div>
  );
}

export default App;