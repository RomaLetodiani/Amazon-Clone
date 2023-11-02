import { useState } from 'react';

export const useInput = (validateValue) => {
  const [value, setValue] = useState('');
  const [valueWasTouched, setValueWasTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && valueWasTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurHandler = (event) => {
    setValueWasTouched(true);
  };

  return {
    value,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
  };
};
