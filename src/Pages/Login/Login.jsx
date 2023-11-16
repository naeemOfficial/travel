import React from 'react';
import img from '../../assets/login.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex max-w-7xl items-center  mx-auto my-32 gap-32">
      
      <div className="w-[600px] ">
        <img src={img} alt="" />
      </div>
      <div className=" w-[400px] h-[400px] p-9 flex items-center rounded-2xl shadow-xl">
        <form className="w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Login</h2>
          <label className="block mb-4">
            <span className="text-gray-700">Username</span>
            <input
              type="text"
              className="border p-2 w-full mt-1"
              placeholder="Enter your username"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              className="border p-2 w-full mt-1"
              placeholder="Enter your password"
            />
          </label>
          <button
            type="submit"
            className="bg-[#3f41e3] text-white p-4 rounded w-full"
          >
            Login
          </button>
          <h1 className='font-semibold'>Dosen't have an account yet?  <Link to="/signUp" ><span className='text-red-500 font-semibold'>Sign Up</span></Link></h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
