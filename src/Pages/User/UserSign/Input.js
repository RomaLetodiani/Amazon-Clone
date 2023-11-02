import React from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
const Input = ({
  val,
  hasError,
  errorMessage,
  type,
  name,
  placeholder,
  onChangeHandler,
  onBlurHandler,
  showPassword,
  setShowPassword,
  disabled,
}) => {
  return (
    <div className="w-full mt-3 relative">
      <input
        className={`w-full pl-3 pr-8 p-1 text-lg rounded-3xl shadow-sm outline-none ${
          hasError ? 'border-red-500' : 'border-[#cad7ec]'
        } border-2`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={val}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        disabled={disabled}
      />
      {(name === 'password' || name === 'RePassword') && val.length > 0 && (
        <button
          className={`absolute p-3 ${
            hasError ? 'text-red-500' : 'text-[#6297ec]'
          } right-0 top-5 -translate-y-1/2`}
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <BsEye /> : <BsEyeSlash />}
        </button>
      )}
      {hasError && (
        <p className="text-red-500 font-bold tracking-wider text-xs mt-1 ml-3">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
