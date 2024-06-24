import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div style={{background:"black" }}>

      <h1 style={{top:"200px",position:"absolute", width:"600px", fontSize:"60px", lineHeight:"1.6"}}>
        we create digital ideas that are bigger, bloder, braver and better.
      </h1>
   
      <div style={{right:"200px", top:"20%" ,position:"fixed"}}>
        <Image src='/about.png' alt='image' width={500} height={500} />
      </div>
    
    </div>
  )
}
