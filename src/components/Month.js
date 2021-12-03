import React, { useState } from "react";
import "./Month.scss";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";

const Month = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="Month">
      <DatePicker
        locale="ko"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
};

export default Month;
