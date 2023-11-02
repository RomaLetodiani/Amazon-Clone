import React from 'react';
import RegisterWrapper from './RegisterWrapper';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/use-input';

const SignUp = () => {
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
  } = useInput((value) => value.trim() !== '');

  const {
    value: password,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const {
    value: RePassword,
    hasError: RePasswordHasError,
    valueChangeHandler: RePasswordChangeHandler,
    valueBlurHandler: RePasswordBlurHandler,
  } = useInput((value) =>
    password.length > 0 ? value === password : value.trim() !== ''
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  return (
    <RegisterWrapper>
      <div className="flex-1 flex flex-col justify-center items-center m-5">
        <form className="flex flex-col max-w-sm p-5 border-[#7187a1] border-2 rounded-3xl">
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
            errorMessage="Email must not be empty"
          />
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            val={password}
            onChangeHandler={passwordChangeHandler}
            onBlurHandler={passwordBlurHandler}
            hasError={passwordHasError}
            errorMessage="Password must not be empty"
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
          />

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
