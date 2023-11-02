import RegisterWrapper from './RegisterWrapper';
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';
import { useInput } from '../../hooks/use-input';
import { useState } from 'react';

const SignIn = () => {
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

  const [showPassword, setShowPassword] = useState(false);

  return (
    <RegisterWrapper>
      <div className="flex-1 flex m-5  flex-col justify-center items-center">
        <form className="flex flex-col max-w-xs p-5 border-[#7187a1] border-2 rounded-3xl">
          <h2 className="text-[#232f3e] text-2xl font-bold pl-3">Sign in</h2>

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
          <p className="text-sm pl-3 mt-3">
            By continuing, you agree to Amazon's{' '}
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
          <Button />
        </form>
        <div className="mt-5 text-[#232f3e]">
          <h5 className="text-[#232f3e] text-center text-sm border-b pb-1 border-[#7187a1]">
            New to Amazon?
          </h5>

          <Link to="/sign-up">
            <button className="bg-[#eeedec] font-bold mt-3 text-[#4a6483] rounded-3xl shadow-2xl px-4 py-2">
              Create your Amazon account
            </button>
          </Link>
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default SignIn;
