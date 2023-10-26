import React from "react";
import { View, Text } from "react-native";

function CountryWeather({ weatherData }) {
    return (
        <View>
            {weatherData ? (
                <View>
                    <Text>Weather in {weatherData.name}, {weatherData.sys.country}</Text>
                    <Text>Temperature: {weatherData.main.temp} °C</Text>
                    <Text>Weather: {weatherData.weather[0].description}</Text>
                </View>
            ) : (
                <Text>No weather data available</Text>
            )}
        </View>
    );
}

export default CountryWeather;
