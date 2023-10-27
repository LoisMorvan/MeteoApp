import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class NextWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    formatHourMinute(dateTime) {
        const date = new Date(dateTime);
        const hour = date.getHours().toString().padStart(2, "0");
        const minute = date.getMinutes().toString().padStart(2, "0");
        return `${hour}:${minute}`;
    }

    render() {
        const { nextWeatherData } = this.props;

        return (
            <View style={styles.nextWeatherContainer}>
                {nextWeatherData.map((hour, index) => (
                    <View key={index} style={styles.hourContainer}>
                        <Image source={{ uri: `https://openweathermap.org/img/wn/${hour.weather[0].icon}.png` }} style={styles.icon} />
                        <Text style={styles.temperatureText}>{Math.round((hour.main.temp - 273.15))}°C</Text>
                        <Text style={styles.hourText}>{this.formatHourMinute(hour.dt_txt)}</Text>
                    </View>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nextWeatherContainer: {
        width: '100%',
        marginTop: 15,
        flexDirection: 'column',
    },
    hourContainer: {
        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        flex: 1,
        width: 90,
        height: 90,
    },
    temperatureText: {
        fontSize: 20,
        flex: 1,
    },
    hourText: {
        fontSize: 20,
        flex: 1,
    },
});


export default NextWeather;
