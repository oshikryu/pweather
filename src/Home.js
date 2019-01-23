import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
  state = {
    newCity: "",
    cities: []
  }

  componentDidMount() {
    if (localStorage.getItem("cities")) {
      this.setState({
        cities: JSON.parse(localStorage.getItem("cities"))
      })
    }
  }

  inputChanged = (event) => {
    this.setState({
      newCity: event.target.value
    })
  }

  buttonClicked = () => {
    if (this.state.newCity.length>2) {
      this.setState((prevState) => ({
        cities: [...prevState.cities, this.state.newCity],
        newCity: ""
      }), () => {
        this.saveCities();
      });
    } else {
      //TODO: replace alert with a better UI
      alert("You need to insert a city name first");
    }
  }

  deleteCity(index) {
    this.setState((prevState) => ({
      cities: prevState.cities.filter( (v,i) => i!==index )
    }), () => {
      this.saveCities();
    });
  }

  saveCities() {
    localStorage.setItem("cities", JSON.stringify(this.state.cities));
  }

  render() {
    return (
      <section>
        {
          this.state.cities.length > 0
          ? <>
              <h2>Cities</h2>
              <ul id="cityList">
              { this.state.cities.map( (city, index) => (
                <li key={city}><Link to={`cities/${city}`}>
                  <span role="img" aria-label="weather">⛅️</span> {city}</Link> <button className='delete' onClick={() => this.deleteCity(index)}>
                  <span role="img" aria-label="delete">🗑</span></button>
                  </li>
              ))}
              </ul>
            </>
          : <p>Add a city to start using the app</p>
        }
        <h3>Add City</h3>
        <form>
          <label>City:</label> 
          <input placeholder="Enter a city name" value={this.state.newCity}
            onChange={this.inputChanged} />
          <button type="button" onClick={this.buttonClicked}>Add</button>
        </form>
      </section>
    )
  }
}

export default Home;