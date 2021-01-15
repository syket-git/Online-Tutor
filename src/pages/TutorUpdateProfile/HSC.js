import React from 'react';

const HSC = () => {
  return (
    <div>
      <div className="row row-space">
        <div className="input-group">
          <label className="label">
            HSC <span style={{ textTransform: 'lowercase' }}>or</span>{' '}
            equivalent level
          </label>
          <div className="ssc">
            <div className="row">
              <div className="col-md-6">
                <label className="label">Examination</label>
              </div>
              <div className="col-md-6">
                <select className="input--style-4 select" name="" id="">
                  <option value="">Select one</option>
                  <option value="">SSC</option>
                  <option value="">Dhakil</option>
                  <option value="">SSC Vocational</option>
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Board</label>
              </div>
              <div className="col-md-6">
                <select className="input--style-4 select" name="" id="">
                  <option value="">Select one</option>
                  <option value="">Chittagong</option>
                  <option value="">Dhaka</option>
                  <option value="">Rajshahi</option>
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Group</label>
              </div>
              <div className="col-md-6">
                <select className="input--style-4 select" name="" id="">
                  <option value="">Select one</option>
                  <option value="">Chittagong</option>
                  <option value="">Dhaka</option>
                  <option value="">Rajshahi</option>
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Passing Year</label>
              </div>
              <div className="col-md-6">
                <select className="input--style-4 select" name="" id="">
                  <option value="">Select one</option>
                  <option value="">Chittagong</option>
                  <option value="">Dhaka</option>
                  <option value="">Rajshahi</option>
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Result</label>
              </div>
              <div className="col-md-6">
                <input
                  className="input--style-4 result"
                  name="result"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HSC;
