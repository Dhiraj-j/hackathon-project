'use client';
import React, { use } from 'react';
import { test } from '../api/function';


const page = () => {

    const handleSubmit = () => {
        console.log("second")
        test();
    }
    return (
        <div>
            <h1>Hello world</h1>
            <button onClick={handleSubmit}>Click me </button>
        </div>
    );
};

export default page;