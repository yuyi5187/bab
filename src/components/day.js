import React from "react";
import "./Day.css";



const Day = ({ clock, text }) => {
    return (
        <div className="ground" >
            <div>
                <button className="title">{clock}</button>
                {text}</div>
        </div>
    );
}

export default Day;