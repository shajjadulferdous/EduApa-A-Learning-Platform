'use client'
import React from 'react';
import { toast } from 'react-toastify';

const JoinButton = () => {
    return (
        <button onClick={()=>toast(`Enroll is not available`)} className='btn bg-orange-500 text-white'>JOIN BATCH</button>
    );
};

export default JoinButton;