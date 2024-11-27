import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black text-white z-10 relative mt-10 w-[70%] m-auto rounded-[12px]  font-orbitron">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold text-white">OETTAQUI</h1>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>  

    </nav>
  );
}

export default Navbar;