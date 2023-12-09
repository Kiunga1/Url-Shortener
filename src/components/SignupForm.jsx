import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import Button from './common/Button';


const SignupForm = ({ signupData, handleInputChange, handleSignup }) => {
  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto">
      

      <div className="mb-6">
        <h2 className="mb-6 text-center text-4xl">Sign Up</h2>
        <p className="text-center text-gray-700 mb-2">Get started with Shortly</p>
      </div>
      <div className="mb-6 flex">
        <div className="mr-2 w-1/2">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
            name="firstName"
            value={signupData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="ml-2 w-1/2">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
            name="lastName"
            value={signupData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
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
          value={signupData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
          name="confirmPassword"
          value={signupData.confirmPassword}
          onChange={handleInputChange}
          required
        />
      </div>

      <Button
        label="Sign Up"
        onClick={handleSignup}
        className="bg-cyan text-white w-full"
      />

      <p className="mt-4 text-center text-gray-700">
        Already have an account? <Link to="/loginPage" className="text-red">Log In</Link>
      </p>
    </form>
  );
};

export default SignupForm;

