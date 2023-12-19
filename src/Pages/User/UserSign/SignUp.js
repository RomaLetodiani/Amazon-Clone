import React from 'react';
import RegisterWrapper from './RegisterWrapper';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import { useInput } from '../../../hooks/use-input';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();

  const {
    value: userNameValue,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: userNameBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes('@'));

  const {
    value: password,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim().length > 6);

  const {
    value: RePassword,
    hasError: RePasswordHasError,
    valueChangeHandler: RePasswordChangeHandler,
    valueBlurHandler: RePasswordBlurHandler,
  } = useInput((value) =>
    password.length > 0 ? value === password : value.trim() !== ''
  );

  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [emailUsaged, setEmailUsed] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const formIsValid =
      userNameValue.trim().length > 0 &&
      emailValue.trim().length > 0 &&
      password.trim().length > 0 &&
      RePassword.trim().length > 0 &&
      RePassword === password;

    if (formIsValid) {
      axios
        .post(
          'https://ngglobalwebapi20231210182820.azurewebsites.net/api/user/getByEmail',
          {
            email: emailValue,
          }
        )
        .then((response) => {
          // Handle the success response here
          console.log('Success (getByEmail):', response.data);

          if (response.data.length === 0) {
            // Email is not found, proceed with registration
            axios
              .post(
                'https://ngglobalwebapi20231210182820.azurewebsites.net/api/user/registerUser',
                {
                  userName: userNameValue,
                  password: password,
                  email: emailValue,
                }
              )
              .then((registrationResponse) => {
                // Handle the success response here
                console.log(
                  'Success (registerUser):',
                  registrationResponse.data
                );
                setSignUpSuccess(true);
                setTimeout(() => {
                  navigate('/sign-in');
                }, 1500);
              })
              .catch((registrationError) => {
                // Handle registration errors
                console.error('Registration Error:', registrationError);
                setSignUpSuccess(false);
              });
          } else {
            // Email is already in use, display an error message
            console.error('Email is already in use');
            setEmailUsed(false);
          }
        })
        .catch((error) => {
          // Handle any errors that occurred during the getEmail request
          console.error('Error (getByEmail):', error);
          setSignUpSuccess(false);
        });
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  return (
    <RegisterWrapper>
      <div className="flex-1 flex flex-col justify-center items-center m-5">
        <form
          onSubmit={submitHandler}
          className="flex flex-col max-w-sm p-5 border-[#7187a1] border-2 rounded-3xl"
        >
          <h2 className="text-[#232f3e] text-2xl font-bold pl-3">
            Create account
          </h2>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            val={userNameValue}
            onChangeHandler={userNameChangeHandler}
            onBlurHandler={userNameBlurHandler}
            hasError={userNameHasError}
            errorMessage="Username must not be empty"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            val={emailValue}
            onChangeHandler={emailChangeHandler}
            onBlurHandler={emailBlurHandler}
            hasError={emailHasError}
            errorMessage={'Email must include @ symbol'}
          />
          {emailUsaged === false && !emailHasError && (
            <p className="text-red-500 font-bold tracking-wider text-xs sm:text-sm sm:font-normal mt-1 ml-3">
              Email is already in use
            </p>
          )}
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            val={password}
            onChangeHandler={passwordChangeHandler}
            onBlurHandler={passwordBlurHandler}
            hasError={passwordHasError}
            errorMessage="Type more then 6 characters."
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />
          <Input
            type={showRePassword ? 'text' : 'password'}
            name="RePassword"
            placeholder="Repeat Password"
            val={RePassword}
            onChangeHandler={RePasswordChangeHandler}
            onBlurHandler={RePasswordBlurHandler}
            hasError={RePasswordHasError}
            errorMessage={`${
              RePassword.length > 0
                ? 'Passwords must be same'
                : 'Re-Password must not be empty'
            }`}
            setShowPassword={setShowRePassword}
            showPassword={showRePassword}
            disabled={passwordHasError || password.length === 0}
          />
          {signUpSuccess === true && (
            <p className=" font-bold tracking-wider text-xs sm:text-sm mt-2 ml-3">
              Redirecting to Sign In...
            </p>
          )}
          {signUpSuccess === false && (
            <p className="text-red-500 tracking-wider text-sm sm:text-base sm:font-normal mt-1 ml-3">
              Sorry we are not able to create your account right now, please try
              again later
            </p>
          )}
          <Button />
          <p className="text-sm mt-3 pl-3">
            By creating an account, you agree to Amazon's{' '}
            <a
              target="__blank"
              className="text-[#0066c0] hover:text-[#c45500]"
              href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
            >
              Conditions of Use
            </a>{' '}
            and{' '}
            <a
              target="__blank"
              className="text-[#0066c0] hover:text-[#c45500]"
              href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"
            >
              Privacy Notice
            </a>
            .
          </p>
        </form>
        <div className="mt-5 text-center w-60 flex flex-col justify-center items-center text-[#232f3e]">
          <h5 className="text-[#232f3e] w-full text-sm border-b pb-1 border-[#7187a1]">
            Already have an account?
          </h5>

          <Link to="/sign-in">
            <button className="bg-[#eeedec] font-bold mt-3 text-[#4a6483] rounded-3xl shadow-2xl px-8 py-2">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default SignUp;
