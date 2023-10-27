import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import NextWeather from "./nextWeather";

class UserWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { weatherData, isLoading } = this.props;

        if (isLoading) {
            // Render a loading message while data is being fetched
            return (
                <View style={styles.container}>
                    <Text>Loading weather data...</Text>
                </View>
            );
        }

        if (!weatherData) {
            //When weather data is not available
            return (
                <View style={styles.container}>
                    <Text>No weather data available.</Text>
                </View>
            );
        }

        const city = weatherData.city.name;
        const currentWeather = weatherData.list[0];

        // Convert temperature in Celsius
        const temperature = currentWeather.main.temp;
        const temperatureCelsius = Math.round((temperature - 273.15));

        const weatherIcon = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png`;

        // Extract next 3 hours weather
        const nextWeatherData = [weatherData.list[1], weatherData.list[2], weatherData.list[3]]

        return (
            <>
                <View style={styles.weatherInfoContainer}>
                    <Text style={styles.text}>{city} {temperatureCelsius}°C</Text>
                </View>
                <Image source={{ uri: weatherIcon }} style={styles.weatherIcon} />
                <NextWeather nextWeatherData={nextWeatherData} />
            </>
        );
    }
}

const styles = StyleSheet.create({
    weatherInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    weatherIcon: {
        width: 180,
        height: 180,
    },
    text: {
        fontSize: 23,
        fontWeight: '700',
    },
});


export default UserWeather;
