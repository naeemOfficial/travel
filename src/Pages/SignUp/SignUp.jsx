import React from "react";
import img from "../../assets/login.jpg";

const SignUp = () => {
  return (
    <div className="flex max-w-7xl items-center  mx-auto my-32 gap-32">
      <div className="w-[600px] ">
        <img src={img} alt="" />
      </div>

      <div className="w-[400px] h-auto p-9 flex items-center rounded-2xl shadow-xl">
        <form>
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Register</h2>

          <label className="block mb-4">
            Username
            <input type="text" className="border p-2 w-full" />
          </label>

          <label className="block mb-4">
            Email
            <input type="email" className="border p-2 w-full" />
          </label>

          <label className="block mb-4">
            Password
            <input type="password" className="border p-2 w-full" />
          </label>

          <label className="block mb-4">
            Confirm Password
            <input type="password" className="border p-2 w-full" />
          </label>

          <button
            type="submit"
            className="bg-[#3f41e3] text-white p-4 rounded w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
