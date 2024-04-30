import React from 'react'
import params from '../dos/[[...params]]'
import { useRouter } from 'next/router'

function userId({user}) {
   // const router=useRouter()
    //if(router.isFallback)
    //    return <div>Loadding...</div>
   // else
  return (
    <div>
 {user.id} : {user.name}
    </div>
  )
}

export default userId
export async function getStaticProps(context){
    const {userId}=context.params
const res= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
const data=await res.json()
return {props:{user:data}}
}
 export function getStaticPaths(){
    return{
        paths:[
            {params:{userId:'1'}},
            {params:{userId:'2'}},
            {params:{userId:'3'}}
        ],fallback:'blocking'
    }
}