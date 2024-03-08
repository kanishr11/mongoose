import axios from "axios";
import { useState } from "react";

function App() {
  const [userName,setUserName] = useState('')
  const [passWord,setPassword] = useState('')

  let submit=async(e)=>{
    e.preventDefault();
    try {
      alert("Submitted")
      console.log("Successfully redirected")
      await axios.post("http://localhost:8000/",{
        userName,passWord
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
     <input type="text" onChange={(e)=>{setUserName(e.target.value)}}
      placeholder="username"/>
     <br></br>
     <input type="text" onChange={(e)=>{setPassword(e.target.value)}} 
     placeholder="password"/>
     <br></br>
     <button type="submit" onClick={submit}> Submit</button>
    </div>
  );
}

export default App;
