// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-background text-primary">
            <div className="text-center">
                <h1 className="text-4xl mb-4">Welcome to Team Collaboration Hub</h1>
                <Link to="/login" className="p-2 bg-black hover:bg-white hover:text-black text-primary rounded">Login</Link>
                <Link to="/register" className="p-2 ml-4 bg-black hover:bg-white hover:text-black text-primary rounded">Register</Link>
            </div>
        </div>
    );
};

export default Home;
