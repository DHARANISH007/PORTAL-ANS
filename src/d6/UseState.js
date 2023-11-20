import React,{useState}from 'react'

export default function UseState() {
    const[student,setStuden]=useState("Dharanish")
  return (
    <div>
      <h1>{student}</h1>
      <button onClick={()=>setStuden("ronaldo")}>click me</button>
    </div>
  )
}