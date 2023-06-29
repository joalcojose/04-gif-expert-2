
export const getGifs =async(lista)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=arFf87Y4fBbSUtNIfdZzyQrmJJb0ghC0&q=${lista}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
       title: img.title,
       url: img.images.downsized_medium.url
  
    }))
      console.log(gifs)
      return gifs;
  
    }