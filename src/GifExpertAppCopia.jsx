
import React from 'react'
import { useState } from 'react'
import {AddCategory} from './data/AddCategory'
import {GifGrid} from './data/GifGrid'

export const GifExpertApp = () => {

   const [category, setCategory] = useState([])

   const registrar = (event) => {
     setCategory(...category, event) 
   }

  return (
    <> 
    <AddCategory onNewCategory={ (event)=>registrar(event) } />

    {
      category.map(  (cate)=> (
        <GifGrid key={cate} cate={cate} />
      )

      )

    }


    <div>GifExpertApp</div>






    </>
  )
}
