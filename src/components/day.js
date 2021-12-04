import React from "react";
import "./Day.css";



const Day = ({ clock, text }) => {
    return (
        <div className="ground" >
            <div>{clock}
                <button className="title">{text}</button>
                </div>
        </div>
    );
}

export default Day;