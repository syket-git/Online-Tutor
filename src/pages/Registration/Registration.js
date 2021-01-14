import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Registration = () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="auth-wrapper">
      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
          <div class="card card-4">
            <div class="card-body">
              <h2 class="title text-center">Registration Form</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">first name</label>
                      <input
                        class="input--style-4"
                        ref={register({ required: true })}
                        type="text"
                        name="firstName"
                      />
                      {errors.firstName && (
                        <p className="error">First name is required.</p>
                      )}
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">last name</label>
                      <input
                        class="input--style-4"
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

                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Email</label>
                      <input
                        class="input--style-4"
                        ref={register({ required: true })}
                        type="email"
                        name="email"
                      />
                      {errors.email && (
                        <p className="error">Email is required.</p>
                      )}
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Phone Number</label>
                      <input
                        class="input--style-4"
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
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Password</label>
                      <input
                        class="input--style-4"
                        ref={register({ required: true })}
                        type="password"
                        name="password"
                      />
                      {errors.password && (
                        <p className="error">Password is required.</p>
                      )}
                    </div>
                  </div>

                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Gender</label>
                      <div class="p-t-10">
                        <label class="radio-container m-r-45">
                          Male
                          <input
                            type="radio"
                            ref={register({ required: true })}
                            checked="checked"
                            name="gender"
                            value="male"
                          />
                          <span class="checkmark"></span>
                        </label>
                        <label class="radio-container">
                          Female
                          <input
                            type="radio"
                            ref={register({ required: true })}
                            name="gender"
                            value="female"
                          />
                          <span class="checkmark"></span>
                        </label>
                        {errors.gender && (
                          <p className="error">Gender is required.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-t-15 text-center">
                  <button class="btn btn--radius-2 btn--red" type="submit">
                    Submit
                  </button>
                  <p className="p-t-10">
                    Already have an account? <Link to="/login">Login</Link>
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
