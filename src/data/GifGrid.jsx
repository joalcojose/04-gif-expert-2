

import React, { useState } from 'react'

import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({cate}) => {

  const[imagen,setImagen] = useState([])

  const getImages = async ()=>{
    const ima = await getGifs(cate)
    setImagen(ima)
  }

  useState ( ()=>{getImages();}, [])


  return (

    <div className='card-grid' >
    <>
    {
        

      imagen.map( ima=>(
        <GifItem key={ima.id} url={ima.url} title={ima.title} />
      ) )


      
    }
    </>
    </div>
  )
}
