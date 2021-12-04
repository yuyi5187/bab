import Day from './Day';
import "./DayList.css";

function DayList({title}){
    return (
        <div className="background"> 
            
            <hr/>
            <div className="maintitle">{title}</div>
            <hr/>         
            <Day clock="11시  " text=" 밥약1"></Day>
            <Day clock="12시  " text=" 밥약2"></Day>
            <Day clock="13시  " text=" 밥약3"></Day>
            <Day clock="14시  " text=" 밥약1"></Day>
            <Day clock="15시  " text=" 밥약1"></Day>
            <Day clock="16시  " text=" 밥약1"></Day>
            <Day clock="17시  " text=" 밥약3"></Day>
            <Day clock="18시  " text=" 밥약3"></Day>
        </div>

    );
}

export default DayList;