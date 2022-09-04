import React, { useState } from 'react'
import "./Join.css"
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'

let user;



const Join = () => {

    const[name, setName] = useState("");

    const sendUser = () =>{
        user = document.getElementById("joinInput").value;
        document.getElementById("joinInput").value ="";

    }

    
  return (
    <div className='Joinpage'>
        <div className="JoinContainer">
            <img src={logo} alt="logo" />
            <h1>C CHAT</h1>
            <input onChange={(e)=>setName(e.target.value)}placeholder="Enter your name" type="text" id="joinInput" />
            <Link onClick = {(event)=> !name? event.preventDefault(): ""}to="/chat"><button className="joinbtn" onClick={sendUser}>JOIN</button></Link>
        </div>
      
    </div>
  )
}

export default Join
export {user}
