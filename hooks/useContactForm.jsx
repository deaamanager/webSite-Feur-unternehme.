import {useState} from 'react';

const useContactForm = () => {
  /// i create this hook to used inside contactform
  const [values, setValues] = useState({
    name: '',
    email: '',
    betreff: '',
    message: '',
    checkbox: false,
  });

  const handleChange = (e) => {
    setValues(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  return {values, handleChange};
};

export default useContactForm;