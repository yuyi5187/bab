import "./Add.css"
import React from "react";


function Add({name, date}) {
    
    const array = ["양식", "한식", "일식", "중식", "기타"];
    const clocks = ["11시","12시","13시","14시","15시","16시","17시","18시"];
    return (
        
        <div className="background">
            <h1 className="main">{name}팟 신규등록</h1>          
            <div className="script">날짜:{date}</div>
            <hr/>
            <div className="script">시간:   
                 <select className="selects">
                 {clocks.map((clock) => (
                <option value={clock}>
                    {clock}
                </option>
            ))}
                 </select>
            </div>
            <hr/>
            <div className="script"> 먹고 싶은 음식:  
            <select className="selects">
            {array.map((item) => (
                <option value={item}>
                    {item}
                </option>
            ))}
            </select>
            </div>
            
            <button className="button">저장</button>
        
        
        </div>
    )
}

export default Add;