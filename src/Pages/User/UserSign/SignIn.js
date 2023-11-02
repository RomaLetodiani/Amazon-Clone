import RegisterWrapper from './RegisterWrapper';
import Button from './Button';
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import { useInput } from '../../../hooks/use-input';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useUser } from '../../../Contexts/UserContext';

const SignIn = () => {
  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes('@') && value.trim().length > 3);

  const {
    value: password,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
  } = useInput((value) => value.trim() !== '');

  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);

  const navigate = useNavigate();

  const { Login } = useUser();

  const cookies = new Cookies();
  const jwt = cookies.get('jwt');

  useEffect(() => {
    // Check if JWT is available in the cookie and set it in Axios headers
    if (jwt) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    }
  }, [jwt]);

  const submitHandler = (event) => {
    event.preventDefault();
    const formIsValid =
      emailValue.trim().length > 0 && password.trim().length > 0;
    if (formIsValid) {
      axios
        .post(
          'https://digitalinstitute-amazon.azurewebsites.net/api/user/login',
          {
            email: emailValue,
            password: password,
          }
        )
        .then((response) => {
          // Handle the success response here (e.g., redirect to the user's dashboard)

          setLoginSuccess(true);

          Login(response.data.jwt);

          setTimeout(() => {
            navigate('/');
          }, 1500);
        })
        .catch((error) => {
          // Handle login errors (e.g., show an error message to the user)
          console.error('Login Error:', error);
          setLoginSuccess(false);
        });
    }
  };

  return (
    <RegisterWrapper>
      <div className="flex-1 flex m-5  flex-col justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="flex flex-col max-w-xs p-5 border-[#7187a1] border-2 rounded-3xl"
        >
          <h2 className="text-[#232f3e] text-2xl font-bold pl-3">Sign in</h2>

          <Input
            type="email"
            name="email"
            placeholder="Email"
            val={emailValue}
            onChangeHandler={emailChangeHandler}
            onBlurHandler={emailBlurHandler}
            hasError={emailHasError}
            errorMessage="Email must include @ symbol"
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
          {loginSuccess === true && (
            <p className=" font-bold tracking-wider text-xs sm:text-sm mt-2 ml-3">
              Redirecting to homepage...
            </p>
          )}
          {loginSuccess === false && (
            <p className="text-red-500 font-bold tracking-wider text-xs sm:text-sm sm:font-normal mt-1 ml-3">
              Email or Password is incorrect
            </p>
          )}
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
