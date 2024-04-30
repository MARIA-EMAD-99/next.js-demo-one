import React, { useEffect, useState } from 'react'

function dashboard() {
    const [dashData,setdashData]=useState(null)
    const [isLoading,setLoadingData]=useState(true)
    useEffect(()=>{
        async function fetchingData(){
    const res= await fetch ('http://localhost:1000/dashboard')
    const data= await res.json()
    setdashData(data[0])
    setLoadingData(false)
        }
        fetchingData()
    },[])
    if (isLoading) return <div>Loading...</div>
    else
  return (
    <div>
        posts:{dashData.posts}
        <br>
        </br>
        Likes:{dashData.likes}
    </div>
  )
}

export default dashboard