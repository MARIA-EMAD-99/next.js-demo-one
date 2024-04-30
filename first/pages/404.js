import { useRouter } from 'next/router';
import React from 'react';

function Error() {
    const router=useRouter()
    const handleRouting=()=>{
        router.push('/products')

    }
  return (
    <>
    <div>Not Found</div>
    <button className='btn btn-danger' onClick={handleRouting}>Go to Products </button>
    </>
  );
}

export default Error;

Error.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
    </>
  );
};
