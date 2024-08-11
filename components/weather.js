import React from "react";
import CitySearch from "./citySearch";
import UserWeather from "./userWeather";
import { View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from "axios";
import { OPEN_WEATHER_API_KEY } from '@env';

const apiKey = OPEN_WEATHER_API_KEY;

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityWeatherData: null,
            userWeatherData: null,
            isLoading: true,

        };
    }

    // When the component is already placed in the DOM
    async componentDidMount() {
        try {
            const userLocation = await this.getUserLocation();
            await this.getUserWeatherData(userLocation);
            this.setState({ isLoading: false });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    getUserLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            const userLocation = location.coords;
            return userLocation;
        } catch (error) {
            console.error(error);
        }
    };

    // Get weather data with user location
    getUserWeatherData = async (userLocation) => {
        if (userLocation) {
            try {
                const { latitude, longitude } = userLocation;
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
                );
                this.setState({ userWeatherData: response.data });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    };

    handleSearch = async (city) => {
        try {
            // Fetch weather data for the specified city and update the state
            const cityWeatherData = await this.fetchWeatherData(city);
            if (cityWeatherData) {
                await this.getCityWeatherData(cityWeatherData);
            }
            // this.setState({ cityWeatherData });
        } catch (error) {
            console.error('Error:', error);
        }
    };


    // Get weather data with city name
    fetchWeatherData = async (city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            return response.data
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    // Get weather data with user location
    getCityWeatherData = async (cityWeatherData) => {

        if (cityWeatherData) {
            const latitude = cityWeatherData.coord.lat;
            const longitude = cityWeatherData.coord.lon;

            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
                );
                this.setState({ cityWeatherData: response.data });
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    };

    render() {
        const { cityWeatherData, userWeatherData, isLoading } = this.state;
        return (
            <View style={styles.container}>
                <CitySearch onSearch={this.handleSearch} />
                {isLoading ? (
                    <Text>Loading weather data...</Text>
                ) : cityWeatherData ? (
                    <UserWeather weatherData={cityWeatherData} />
                ) : userWeatherData ? (
                    <UserWeather weatherData={userWeatherData} />
                ) : (
                    <Text>No weather data available.</Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
});

export default Weather;
