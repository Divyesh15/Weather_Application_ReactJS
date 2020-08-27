import React, { Component } from "react";
import "./App.css";


const apiKey = "44883ed03698c9db1fd522d778ff25a1";


class App extends Component {

  state={
    city:undefined,
    status:undefined,
    cod:undefined,
    country:undefined,
    desc:undefined,
    humidity:undefined,
    temp:undefined
    
  }
  
  reset(e){
    this.setState({
    city:undefined,
    state:undefined,
    cod:undefined,
    country:undefined,
    desc:undefined,
    humidity:undefined,
    temp:undefined
    })
  }


  get_temp(e){
    this.setState({
      // city:undefined,
      status:undefined,
      state:undefined,
      cod:undefined,
      country:undefined,
      desc:undefined,
      humidity:undefined,
      temp:undefined
    })


    let url1="https://api.openweathermap.org/data/2.5/weather?q="
    let api_id="&appid=44883ed03698c9db1fd522d778ff25a1"

    fetch(url1+this.state.city+api_id)
    .then(data=>data.json())
    .then(
      data=>{
      const { main, sys, name, weather,cod } =data;
        this.setState({city:name,
                       cod:cod,
                      temp: main.temp,
                      humidity: main.humidity,
                      desc:weather[0].description,
                      country:sys.country,
                      status:"City Found"})
        
        console.log(data)
    }).catch(
      error=>{
        this.setState({status:"invalid CITY"})
        console.log(error)
      }
    );
  }
  handlechange(event){
    this.setState({ [event.target.name] : event.target.value})
  }


  render() {
    
    return (
          <div>

          <h1>Weather Finder:</h1>
          <h2>Please Enter your city to know weather</h2>
          <input type="text" name="city" onChange={event=>this.handlechange(event)} />
          <button name="city" onClick={e=>this.get_temp(e)}> get_weather </button>

          


                <p>status: {this.state.status}</p>
                <p>City: {this.state.city}</p>
                <p>temperature: {this.state.temp}</p>
                <p>Country: {this.state.country}</p>
                <p>Humidity: {this.state.humidity}</p>
                <p>Description: {this.state.desc}</p>
                <p></p>
                <button onClick={e=>{this.reset(e)}} >RESET</button>
             
      </div>
    );
  }
}

export default App;
