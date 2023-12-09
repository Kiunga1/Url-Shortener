import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import BackArrow from '../components/common/BackArrow';
import '../css/formContainer.css'

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login data:', loginData);
  };

  return (
    <div className="formContainer mt-5">
      <div>
      <Link to='/' className='text-center flex gap-3 p-4 '>
          <BackArrow/>
          Back</Link>
      </div>
      <div className="row justify-content-center">
        <div className="md:w-3/4 ">
          <LoginForm
            loginData={loginData}
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
