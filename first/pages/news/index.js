import React from 'react'

function index({ news }) {
  return (
    <div>
      {news.map((n) => <div key={n.id}>{n.title}</div>)}
    </div>
  )
}

export default index

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1000/news')
  const data = await res.json() // Don't forget to invoke .json() method
  return { props: { news: data } }
}
