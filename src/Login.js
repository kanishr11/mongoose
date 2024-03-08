import axios from 'axios'
import React, { useState } from 'react'

export const Login = () => {
    const [fName,setFname] = useState('')
    const [lName,setLname] = useState('')
    const [birth,setBirth] = useState('')
    
    let submit=async(e)=>{
        e.preventDefault();
        try {
            alert("Submitted login page")
            await axios.post("http://localhost:8000/",{
                      fName,lName,birth
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <label>First Name:</label>
        <br></br>
        <input onChange={(e)=>{setFname(e.target.value)}} type='text' placeholder='first name'/>
        <br></br>
        <label>Last Name:</label>
        <br></br>
        <input onChange={(e)=>{setLname(e.target.value)}} type='text' placeholder='last name'/>
        <br></br>
        <label>Data of Birth</label>
        <br></br>
        <input onChange={(e)=>{setBirth(e.target.value)}} type='data'/>
        <br></br>
        <button onClick={submit} type='submit'>Submit</button>
        <button type='reset'>Reset</button>
    </div>
  )
}
