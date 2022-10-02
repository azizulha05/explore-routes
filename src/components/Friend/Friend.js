import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, email, address, username } = friend;
    return (
        <div className='border rounded-lg bg-gray-500 text-justify p-4 text-slate-100 text-xl'>
            <p>name: {name}</p>
            <p><small>UserName: <Link to={`/friend/${id}`}>{username}</Link> </small></p>
            <p>Email: {email}</p>
            <p>City: {address.city}</p>
            <button className='btn btn-active w-full my-4'>Create Link</button>
        </div>

    );
};

export default Friend;