import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div className='bg-slate-100 p-5 '>
            <h2>All Friends: {friends.length}</h2>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend} />)
                }
            </div>

        </div>
    );
};

export default Friends;