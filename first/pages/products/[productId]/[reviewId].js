import { useRouter } from 'next/router';
import React from 'react';

function ReviewId() {
    const router = useRouter();
    const { productId, reviewId} = router.query; // Renaming reviewId to review

    return (
        <div>Review ID is {reviewId} for product {productId}</div>
    );
}

export default ReviewId;
