import React from 'react'

function category({newsss}) {
  return (
    <div>
  {newsss.map((n) => <div key={n.id}>{n.title},{n.category}</div>)}
    </div>
  )
}

export default category
export async function getServerSideProps(context) {
    const {category}=context.params
    const res = await fetch(`http://localhost:1000/news?category=${category}`)
    const data= await res.json()
    return{
        props:{newsss:data}
    }
}