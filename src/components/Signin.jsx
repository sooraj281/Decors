import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signin.css'; 

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

       
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        
        <div className="max-h-screen  py-28 flex items-center justify-center">
            <div className="bg-transparent p-8 rounded shadow-md w-full max-w-md">
                
                <h2 className="text-3xl font-bold mb-6 text-center text-white px-5">Sign In</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            placeholder='Email'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            autoComplete="email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            placeholder='Password'
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded"
                            autoComplete="current-password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
                <h3 className='text-white text-center p-4'>
                    Forgot password ? 
                </h3>
               <h1 className=' font-bold text-2xl text-white text-center '>Don't have an account ? <Link to="./Signup" className="text-blue-400 hover:underline">Sign up</Link>
                </h1>
            </div>
        </div>
    );
};

export default SignIn;
