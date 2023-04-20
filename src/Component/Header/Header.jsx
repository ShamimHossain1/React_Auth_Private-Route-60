import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between lg:px-28 px-3">
                <p className="lg:text-2xl font-bold">Auth Master</p>
               <div className='lg:pr-52'> <Link to='/' className="btn btn-ghost normal-case lg:text-xl">Home</Link>
                <Link to='/login' className="btn btn-ghost normal-case lg:text-xl">Login</Link>
                <Link to='/register' className="btn btn-ghost normal-case lg:text-xl">Register</Link></div>
            </div>
        </div>
    );
};

export default Header;