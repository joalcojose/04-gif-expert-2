import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({cate}) => {

  const [images,setImages] = useState([])

  const getImages = async ()=>{
    const ima = await getGifs(cate)
    setImages(ima)
  }

  useEffect ( ()=>{
    getImages();},[] )

  return (
    

    <>
    <div>GifGrid</div>

    {
      images.map( ima=>(
        <GifItem  key={ima}
                  url={ima.id} 
                  title={ima.title} />
      ) )
    }
    
    </>

  )
}
