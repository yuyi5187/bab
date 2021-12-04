import Day from './Day';
import "./DayList.css";

function DayList (){
    return (
        <div className="background">
            <hr/>
            <div className="maintitle">오늘</div>
            <hr/>         
            <Day clock="오전 11시" text=" 밥약1"></Day>
            <Day clock="오후 12시" text=" 밥약2"></Day>
            <Day clock="오후 01시" text=" 밥약3"></Day>
            <Day clock="오후 02시" text=" 밥약1"></Day>
            <Day clock="오후 03시" text=" 밥약1"></Day>
            <Day clock="오후 04시" text=" 밥약1"></Day>
            <Day clock="오후 05시" text=" 밥약3"></Day>
            <Day clock="오후 06시" text=" 밥약3"></Day>
        </div>

    );
}

export default DayList;