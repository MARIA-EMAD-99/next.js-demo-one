import React from 'react';
import useSWR from 'swr';

const fetcher = async () => {
  const res = await fetch('http://localhost:1000/dashboard');
  const data = await res.json();
  return data[0];
};

const DashboardSWR = () => {
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;


  return (
    <div>
        <h1> Dashboard SWR</h1>
      Posts: {data.posts}
      <br />
      Likes: {data.likes}
    </div>
  );
};

export default DashboardSWR;

