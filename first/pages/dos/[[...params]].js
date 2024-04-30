import React from 'react';
import { useRouter } from 'next/router';

const Params = () => {
    const router = useRouter();
    const { params = [] } = router.query;

    if (params.length === 0) {
        return <h1>No parameters provided.</h1>;
    } else if (params.length === 1) {
        return <h1>Parameter: {params[0]}</h1>;
    } else if (params.length === 2) {
        return <h1>Parameters: {params[0]} and {params[1]}</h1>;
    } else {
        return <h1>Too many parameters provided.</h1>;
    }
};

export default Params;