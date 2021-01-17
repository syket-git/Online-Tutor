import React from 'react';
import { useSelector } from 'react-redux';

const Graduation = () => {
  const { board, years } = useSelector((state) => state.education);
  return (
    <div>
      <div className="row row-space">
        <div className="input-group">
          <label className="label">[If applicable] Graduation level</label>
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
                  {board?.length > 0 &&
                    board.map((bd) => (
                      <option key={bd._id}>{bd.board_name}</option>
                    ))}
                </select>
              </div>
            </div>
            <div className="row p-t-10">
              <div className="col-md-6">
                <label className="label">Degree</label>
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
                  {years?.length > 0 &&
                    years.map((yr) => (
                      <option key={yr._id}>{yr.passing_year}</option>
                    ))}
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

export default Graduation;
