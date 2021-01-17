import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './TutorUpdateProfile.css';
import ProfileImage from './ProfileImage';
import SSC from './SSC';
import HSC from './HSC';
import Graduation from './Graduation';
import Master from './Master';
import { useDispatch } from 'react-redux';
import {
  getSSCLevel,
  getHSCLevel,
  getBoardName,
  getGroupName,
  getUniversityName,
  getPassingYears,
} from '../../actions/education';

const TutorUpdateProfile = () => {
  const { handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    dispatch(getSSCLevel());
    dispatch(getHSCLevel());
    dispatch(getBoardName());
    dispatch(getGroupName());
    dispatch(getUniversityName());
    dispatch(getPassingYears());
  }, [dispatch]);

  return (
    <div className="auth-wrapper">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title text-center">Update Profile</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <ProfileImage />
                <SSC />
                <HSC />
                <Graduation />
                <Master />

                <div className="row row-space">
                  <div className="input-group">
                    <label className="label">Speciality</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="firstName"
                    />
                  </div>
                </div>

                <div className="row row-space">
                  <div className="input-group">
                    <label className="label">Present Address</label>
                    <textarea
                      className="input--style-4 text-area"
                      name="presentAddress"
                    ></textarea>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="input-group">
                    <label className="label">Permanent Address</label>
                    <textarea
                      className="input--style-4 text-area"
                      name="permanentAddress"
                    ></textarea>
                  </div>
                </div>

                <div className="p-t-15 text-center">
                  <button className="btn btn--radius-2 btn--red" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorUpdateProfile;
