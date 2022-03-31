import { useState,useEffect } from "react";

const useFetch=(url)=>{
  const [data,setData]=useState(null)
  
  useEffect(()=>{
      setTimeout(()=>{
          fetch(url)
          .then(res=>{
              console.log(res)
              return res.json()
          })
          .then((data)=>{
              setData(data)
          })
      },);

      
  },[url]);
  return(
     {data}
  )
}
export default useFetch;