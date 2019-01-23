import React from 'react';
import { withRouter } from 'react-router-dom';
import { getWeather } from './weatherapi';
import "./CityView.css";

class CityView extends React.Component {
    state = {
        temperature: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const city = this.props.match.params.city.toLowerCase();
            const response = await getWeather(city);
            this.setState({
                temperature: response.main.temp,
                loading: false
            });

        } catch (e) {
            console.log(e)
            this.setState({
                temperature: "ERROR",
                loading: false
            });
        }
    }
    render() {
      console.log(this.props.match.params);
        return (
            <div>
                <h2 id="city">{this.props.match.params.city.toUpperCase()}</h2>
                {
                    this.state.loading 
                    ? <p>Loading</p>
                    : <p id="temperature">{ this.state.temperature }F</p>

                }
            </div>
        )
    }
}

export default withRouter(CityView);
