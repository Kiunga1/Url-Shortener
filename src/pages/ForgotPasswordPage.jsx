import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import BackArrow from '../components/common/BackArrow';
import '../css/formContainer.css'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendRecoveryCode = (e) => {
    e.preventDefault();
    console.log('Sending recovery code to:', email);
  };

  return (
    <div className="formContainer">
      
      <div className='md:w-3/4 m-10 flex flex-col justify-center align-center'>
      <div className="mb-6 mt-4 md:w-3/4">
        <h4 className="mb-2 text-center text-4xl font-medium">Forgot Password</h4>
        <p className="text-justify text-gray-700">
          Enter the email address you used when you joined,<br/>
          and we will send you instructions to reset your password.
        </p>
      </div>
      <form className="md:w-3/4 " onSubmit={handleSendRecoveryCode}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-gray-100"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>

        <Button
          label="Send Recovery Code"
          onClick={handleSendRecoveryCode}
          className="bg-cyan text-white w-full"
        />
        <Link to='/loginPage' className='text-center text-red mt-4 flex gap-3 justify-center align-center'>
          <BackArrow/>
          Back to sign in</Link>
      </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
