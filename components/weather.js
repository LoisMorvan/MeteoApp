import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";
import CountryWeather from "./countryWeather";

const apiKey = "8998cbcb5a9dc632002404e80f2e27a7";

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryInput: "",
            weatherData: null,
        };
    }

    handleCountryChange = (text) => {
        this.setState({ countryInput: text });
    };

    fetchWeatherData = async (country) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`
            );
            this.setState({ weatherData: response.data });
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    render() {
        return (
            <View>
                <Text>Enter a Country:</Text>
                <TextInput
                    style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                    onChangeText={this.handleCountryChange}
                    value={this.state.countryInput}
                />
                <Button
                    title="Get Weather"
                    onPress={() => {
                        this.fetchWeatherData(this.state.countryInput);
                    }}
                />
                <CountryWeather weatherData={this.state.weatherData} />
            </View>
        );
    }
}

export default Weather;
