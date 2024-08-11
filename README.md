# MeteoAPP

## Description

**MeteoAPP** is a React Native application that provides weather information based on the user's current location or any city they search for. The app integrates with the OpenWeather API to fetch weather data, including the current weather, temperature, and a forecast for the next few hours. The app also features a simple navigation system that allows users to switch between the weather view and an "About Us" page.

## Features

- **Current Location Weather:** Automatically fetches and displays weather information for the user's current location.
- **City Search:** Allows users to search for and display weather data for any city worldwide.
- **Weather Forecast:** Displays the weather forecast for the next few hours after the current weather.
- **Navigation:** Bottom tab navigation to switch between the weather view and an "About Us" page.

## Project Structure

```
MeteoAPP/
│
├── .expo/                   # Expo configuration files
├── assets/                  # Static assets (images, etc.)
├── components/              # React components
│   ├── aboutPage.js         # "About Us" page component
│   ├── citySearch.js        # City search bar component
│   ├── navigation.js        # Bottom tab navigation component
│   ├── nextWeather.js       # Displays the next few hours' weather component
│   ├── userWeather.js       # Displays current weather data component
│   └── weather.js           # Main weather component (fetches and displays weather data)
│
├── node_modules/            # Node.js modules
├── .env                     # Environment variables (API key)
├── .gitignore               # Files and directories to ignore in Git
├── App.js                   # Main application file
├── app.json                 # Expo configuration file
├── babel.config.js          # Babel configuration file
├── package-lock.json        # NPM package lock file
└── package.json             # NPM package configuration file
```

## Components Overview

### `App.js`
- The entry point of the application.
- Wraps the app's navigation within a `NavigationContainer` to manage the navigation state.

### `components/navigation.js`
- Manages the bottom tab navigation between the Weather screen and the About Us page.
- Uses `react-navigation` to create a bottom tab navigator with icons.

### `components/weather.js`
- The core component responsible for fetching and displaying weather data.
- It retrieves the user's location and fetches the corresponding weather data using the OpenWeather API.
- Also allows users to search for weather data in other cities.

### `components/citySearch.js`
- A search bar component that allows users to enter a city name and trigger a search for that city's weather data.

### `components/userWeather.js`
- Displays the current weather data, including the city name, temperature, and an icon representing the weather.
- Integrates with `nextWeather.js` to display a brief forecast.

### `components/nextWeather.js`
- Displays the weather forecast for the next few hours, including temperature and weather conditions.

### `components/aboutPage.js`
- A simple "About Us" page that provides information about the app and its creator.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/LoisMorvan/MeteoApp.git
   cd MeteoAPP
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the root directory and add your OpenWeather API key:
     ```
     OPEN_WEATHER_API_KEY=your_openweather_api_key
     ```

4. **Run the app:**
   ```bash
   npm start
   ```

## Dependencies

- **React Native:** Framework for building native apps using React.
- **Expo:** Toolset for developing and deploying React Native applications.
- **react-navigation:** Library for routing and navigation in React Native apps.
- **axios:** HTTP client for making API requests.
- **react-native-vector-icons:** Library for using vector icons in React Native.