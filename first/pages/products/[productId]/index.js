import { useRouter } from 'next/router';
import React from 'react';

function ProductId() {
    const router = useRouter();
    const { productId } = router.query; 

    return (
        <div>product Id is {productId}</div>
    );
}

export default ProductId;
