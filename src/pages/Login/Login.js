import React from 'react';
import '../Registration/Registration.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
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
              <h2 class="title text-center">Login Form</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                </div>

                <div class="p-t-15 text-center">
                  <button class="btn btn--radius-2 btn--red" type="submit">
                    Submit
                  </button>
                  <p className="p-t-10">
                    Don't have an account?{' '}
                    <Link to="/registration">Registration</Link>
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

export default Login;
