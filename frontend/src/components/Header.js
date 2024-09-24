import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
          <Link to="/">Blog Platform</Link>
        </h1>
        <nav>
          <Link to="/create" className="text-sm hover:underline">
            New Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
