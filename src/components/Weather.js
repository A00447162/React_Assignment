import React from 'react';
import "../App.css";
const Weather = (props) => {
    return(
        props.data.isCelsius === true ? 
    <div>
        <p> Temperature: {props.degrees} &#8451;</p>
        <button className="button-class button3" onClick={() => props.data.changetoOther(false)}>Convert to Fahrenheit</button>
    </div> :
    <div>
    <p> Temperature: {(32 + (props.degrees * 1.8)).toFixed(2)} &#8457;</p>
    <button className="button-class button3" onClick={() => props.data.changetoOther(true)}>Convert to Celsius</button>
</div>
    )
}
export default Weather;