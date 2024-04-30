import React from 'react'

function index({users}) {
 
  return (

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
{ users.map((u)=><tr key={u.id}>
  
      <th scope="row">{u.id}</th>
      <td>{u.id}</td>
      <td>{u.name}</td>
      <td>
        <a href={'users/${u.id}'}>see More</a>
      </td>
      </tr>
)}
  </tbody>
</table>

   // <div>
    //  {users.map((u)=><div key={u.id}>{u.name}</div>)}
   // </div>
  )
}

export default index
export async function  getStaticProps(){
const res= await fetch('https://jsonplaceholder.typicode.com/users')
const data=await res.json()
return {props:{users:data},revalidate:20}
}