import React, { useState } from "react";
import "./Month.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Month = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="Month">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        wrapperClassName="datepicker"
      />
    </div>
  );
};
export default Month;
