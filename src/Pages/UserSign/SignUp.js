import React from 'react';
import RegisterWrapper from './RegisterWrapper';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Repassword, setRepassword] = useState('');
  return (
    <RegisterWrapper>
      <div className="flex-1 flex flex-col justify-center items-center m-5">
        <form className="flex flex-col max-w-sm p-5 border-[#7187a1] border-2 rounded-3xl">
          <h2 className="text-[#232f3e] text-2xl font-bold pl-3">
            Create account
          </h2>
          <Input
            type="text"
            name="Username"
            placeholder="Username"
            val={username}
            setVal={setUsername}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            val={email}
            setVal={setEmail}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            val={password}
            setVal={setPassword}
          />
          <Input
            type="password"
            name="password"
            placeholder="Re-enter Password"
            val={Repassword}
            setVal={setRepassword}
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
