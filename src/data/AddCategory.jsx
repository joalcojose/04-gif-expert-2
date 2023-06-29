
import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

  const [texto,setTexto] = useState([])

  const eventoSubmit =(event)=>{
    event.preventDefault()
    onNewCategory(event)
  }

  const eventoChange =(event)=>{
    setTexto(event.target.value)
  }


  return (
    <>
    <form onSubmit={(event)=>eventoSubmit(event)} >
      <input 
      type='text'
      value={texto}
      onChange={(event)=>eventoChange(event)}
      />

    </form>
    
    </>
  )
}
