
import React, { useState } from 'react'
import { AddCategory } from './data/AddCategory'
import {GifGrid} from './data/GifGrid'

export const GifExpertApp = () => {

  const[categoy,setCategory] = useState([])

  const registrar =(event)=>{
    setCategory([...categoy, event])
  }


  return (
    <>
    <AddCategory onNewCategory={(event)=>registrar(event)} />

    {
      categoy.map(  (cate)  =>(
        <GifGrid key={cate} cate={cate} />
      ) )
    }
    
    
    </>
  )
}
