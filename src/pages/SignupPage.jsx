import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import BackArrow from '../components/common/BackArrow';
import '../css/formContainer.css'


const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup data:', signupData);
  };

  return (
    <div className="formContainer">
      <div className="row justify-content-center">
        <Link to='/' className='text-center flex gap-3 p-4 '>
          <BackArrow/>
          Back</Link>
      </div>
      <div className="md:w-3/4 ">
          <SignupForm
            signupData={signupData}
            handleInputChange={handleInputChange}
            handleSignup={handleSignup}
          />
      </div>
    </div>
  );
};

export default SignupPage;
