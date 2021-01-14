import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Registration = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  const url = window.location.href;
  let sendUrl;

  if (url.endsWith('student') === true) {
    sendUrl = '/login/student';
  } else {
    sendUrl = '/login/tutor';
  }

  return (
    <div className="auth-wrapper">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title text-center">Registration Form</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-space">
                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">first name</label>
                      <input
                        className="input--style-4"
                        ref={register({ required: true })}
                        type="text"
                        name="firstName"
                      />
                      {errors.firstName && (
                        <p className="error">First name is required.</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">last name</label>
                      <input
                        className="input--style-4"
                        ref={register({ required: true })}
                        type="text"
                        name="latName"
                      />
                      {errors.latName && (
                        <p className="error">Last name is required.</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">Email</label>
                      <input
                        className="input--style-4"
                        ref={register({ required: true })}
                        type="email"
                        name="email"
                      />
                      {errors.email && (
                        <p className="error">Email is required.</p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">Phone Number</label>
                      <input
                        className="input--style-4"
                        ref={register({ required: true })}
                        type="text"
                        name="phone"
                      />
                      {errors.phone && (
                        <p className="error">Phone is required.</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">Password</label>
                      <input
                        className="input--style-4"
                        ref={register({ required: true })}
                        type="password"
                        name="password"
                      />
                      {errors.password && (
                        <p className="error">Password is required.</p>
                      )}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group">
                      <label className="label">Gender</label>
                      <div className="p-t-10">
                        <label className="radio-container m-r-45">
                          Male
                          <input
                            type="radio"
                            ref={register({ required: true })}
                            name="gender"
                            value="male"
                          />
                          <span className="checkmark"></span>
                        </label>
                        <label className="radio-container">
                          Female
                          <input
                            type="radio"
                            ref={register({ required: true })}
                            name="gender"
                            value="female"
                          />
                          <span className="checkmark"></span>
                        </label>
                        {errors.gender && (
                          <p className="error">Gender is required.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-t-15 text-center">
                  <button className="btn btn--radius-2 btn--red" type="submit">
                    Submit
                  </button>
                  <p className="p-t-10">
                    Already have an account? <Link to={sendUrl}>Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
