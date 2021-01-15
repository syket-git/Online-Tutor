import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { useForm } from 'react-hook-form';
import ProfileImage from '../../images/ProfileImage.png';
import './TutorUpdateProfile.css';

const TutorUpdateProfile = () => {
  const [image, setImage] = useState('');

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="auth-wrapper">
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title text-center">Update Profile</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-space">
                  <div className="update__profile-image-wrapper">
                    <div className="profile__image">
                      <img src={ProfileImage} alt="Profile" />

                      <div className="edit-box">
                        <label htmlFor="image">
                          <EditIcon className="image-edit" />
                        </label>
                        <input
                          className="file-input"
                          type="file"
                          name="image"
                          id="image"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row row-space">
                  <div className="input-group">
                    <label className="label">Speciality</label>
                    <input
                      className="input--style-4 special"
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
