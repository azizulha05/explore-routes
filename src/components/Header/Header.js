import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex flex-col justify-center text-3xl bg-slate-500  ">
            <div className="navbar">
                <div className="flex-1">
                    <p  className="text-2xl font-bold">BOGURA</p>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt='' src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <navBar className='text-white py-4 bg-slate-400'>
                <Link className='mr-2 hover:bg-lime-400 px-3 py-2 hover:rounded-lg' to='/home'>Home </Link>
                <Link className='mr-2 hover:bg-lime-400 px-3 py-2 hover:rounded-lg' to='/about'>About</Link>
                <Link className='mr-2 hover:bg-lime-400 px-3 py-2 hover:rounded-lg' to='/products'>Product</Link>
                <Link className='mr-2 hover:bg-lime-400 px-3 py-2 hover:rounded-lg' to='/services'>Services</Link>
                <Link className='mr-2 hover:bg-lime-400 px-3 py-2 hover:rounded-lg' to='/friends'>Friends</Link>
            </navBar>

        </div>
    );
};

export default Header;