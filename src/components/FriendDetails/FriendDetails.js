import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const { name, username, email, phone, website } = friend

    return (
        <div className='flex justify-center mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <div className='text-justify ml-16'>
                        <p>User Name: {username}</p>
                        <p>Email: {email}</p>
                        <p>Call him/her: {phone} </p>
                        <p>Website him/her: {website} </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;