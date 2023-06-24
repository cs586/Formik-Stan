import React from 'react';
import './App.css';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      if (values.email && values.password) {
        alert('Login Successful');
      }
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = 'Field required';
      }

      if (!values.email) {
        errors.email = 'Field required';
      } else if (!isValidEmail(values.email)) {
        errors.email = 'Username should be an email';
      }

      if (!values.password) {
        errors.password = 'Field required';
      }

      return errors;
    }
  });

  // Helper function to check if email is in a valid format
  const isValidEmail = (email) => {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name:</div>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
        <div>Email:</div>
        <input
          type="text"
          name="email"
          id="emailField"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: 'red' }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password:</div>
        <input
          type="password"
          name="password"
          id="pswField"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: 'red' }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
