import React from 'react';
import { useDispatch } from 'react-redux';
import { selectDay } from './redux/plannerActions';

const DatePicker = ({ selectedDay }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(selectDay(e.target.value));
  };

  return (
    <div>
      <label htmlFor="datePicker">Select Day:</label>
      <input
        type="date"
        id="datePicker"
        value={selectedDay}
        onChange={handleChange}
      />
    </div>
  );
};

export default DatePicker;
