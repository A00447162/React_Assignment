import React, {Component} from 'react';
import Weather from './Weather';
class MyTown extends Component
{
    constructor(){
        super();
        this.state = {
            degrees : null,
            isCelsius : true,
        }
    }
    componentDidMount(){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Halifax&units=metric&appid=cb1d074f677a31135d69b228ddeeeb72')
        .then((res) => res.json())
        .then(weather => this.setState({degrees: weather["main"]["temp"]}))
    }
    changetoOther(item)
    {
        this.setState({
            isCelsius : item,
        })
    }
    render(){
        return(
        <div>
            <img src= 'https://cdn.travelpulse.com/images/79aaedf4-a957-df11-b491-006073e71405/814606c3-80bd-4fd6-9a6e-9fe74164be0d/630x355.jpg' alt = 'Halifax, NS.jpg' width="600" height="300" />
            <h1>I live in Halifax, Nova Scotia.</h1>
            <p>Halifax, an Atlantic Ocean port in eastern Canada, is the provincial capital of Nova Scotia. A major business centre, it’s also known for its maritime history.</p>
            {this.state.degrees > 20 ? <img alt='Sunny Weather.jpg' src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/sunny.png" /> : this.state.degrees < 10 ? <img alt='Cold Weather.jpg' src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/cold.png" /> : <img alt='Mild Weather.jpg' src = "https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/mild.png" />} 
            <Weather data = {{isCelsius : this.state.isCelsius, changetoOther:this.changetoOther.bind(this)}} degrees = {this.state.degrees}/>
        </div>
        )
    }
}
export default MyTown;