import React from 'react';
import { useSelector } from 'react-redux';

const HSC = () => {
  const { hsc, board, group, years } = useSelector((state) => state.education);
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
                  {hsc?.length > 0 &&
                    hsc.map((hc) => (
                      <option key={hc._id}>{hc.hsc_level}</option>
                    ))}
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
                <label className="label">Group</label>
              </div>
              <div className="col-md-6">
                <select className="input--style-4 select" name="" id="">
                  <option value="">Select one</option>
                  {group?.length > 0 &&
                    group.map((gp) => (
                      <option key={gp._id}>{gp.group_name}</option>
                    ))}
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

export default HSC;
