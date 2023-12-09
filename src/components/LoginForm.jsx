import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import Button from './common/Button';

const LoginForm = ({ loginData, handleInputChange, handleLogin }) => {
  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto">
      {/*<div className="image-container col-end-3 ">
        <Image src="src\assets\images\user.png" alt="User with lens" />
      </div>
      {/* Log In Section */}
      <div className="mb-6">
        
        <h2 className="mb-6 text-center text-4xl">Login</h2>
        <p className="text-center text-gray-700 mb-2">Get started with Shortly</p>
        
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          required
        />
        <p className="text-left mt-2">
          <Link to='/forgotPasswordPage' className="text-red ">Forgot Password?</Link>
        </p>
      </div>

      
      {/* Log In Button */}
      <Button
        label="Log In"
        onClick={handleLogin}
        className="bg-cyan text-white w-full"
      />

      {/* Don't have an account yet? */}
      <p className="mt-4 text-center text-gray-700">
        Don't have an account yet? <Link to='/signupPage' className="text-red">Sign Up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
