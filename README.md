# Enhanced Weather App

An elegant and modern weather application that provides current weather, forecasts, air quality index, and supports features like geolocation-based weather, dark mode, and saving favorite cities. Built using the OpenWeatherMap API.

## Features

- **Search by City:** Enter a city name to get current weather details.
- **Geolocation:** Get weather data for your current location.
- **Weather Details:** View temperature, humidity, wind speed, pressure, sunrise, sunset, and weather description.
- **Forecast:** See a 5-day weather forecast.
- **Air Quality Index:** Get air quality information based on the current location.
- **Dark Mode:** Toggle between light and dark mode for better readability.
- **Favorites:** Save favorite cities for quick access.
- **Unit Toggle:** Switch between Celsius and Fahrenheit.
- **Loading State:** Show loading animation while fetching data.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Getting Started

### Prerequisites

- A web browser
- Internet connection
- An API key from OpenWeatherMap (replace `apiKey` variable in the code with your own API key)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sauravjadhav/weatherjs.git
   ```
2. Open the `index.html` file in your web browser.

## Usage

1. **Search Weather:** Enter the name of a city in the search bar and click the search button or press Enter.
2. **Geolocation Weather:** Click the "Use My Location" button to get the weather data for your current location.
3. **Toggle Dark Mode:** Click the dark/light mode toggle button in the top-right corner.
4. **Save Favorite City:** Click the heart icon to save a city as a favorite. Your favorite cities will be listed for quick access.
5. **Switch Temperature Unit:** Click the unit toggle button to switch between Celsius and Fahrenheit.

## Code Explanation

### HTML

- The main structure of the application is defined here, including the search bar, loading spinner, weather info card, and error message container.

### CSS

- Custom styles are defined using CSS variables for colors and other properties. Includes styles for dark mode, animations, and responsiveness.

### JavaScript

- Handles fetching data from the OpenWeatherMap API, updating the UI with weather information, managing favorites, and handling user interactions.

### Functions

- `getWeather()`: Fetches weather data for the entered city.
- `toggleLoadingButton()`: Toggles loading state for the search button.
- `getGeolocationWeather()`: Fetches weather data for the user's current location.
- `fetchWeatherData()`: Fetches and updates weather, forecast, and air quality data.
- `updateWeatherInfo()`: Updates the weather info card with fetched data.
- `toggleUnit()`: Switches between Celsius and Fahrenheit.
- `toggleFavorite()`: Adds/removes a city from the favorites list.
- `updateFavorites()`: Updates the UI with the list of favorite cities.
- `showError()`: Displays error messages.
- `retryLastAction()`: Retries the last action (search or geolocation).
- `fetchCitySuggestions()`: Fetches city suggestions for autocomplete.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api)
- [Google Fonts](https://fonts.google.com/)
- [Material Icons](https://material.io/resources/icons/)

## Contact

If you have any questions or feedback, feel free to contact me at [sauravjadhav2468@gmail.com](mailto:sauravjadhav2468@gmail.com).

---

*This README was generated with the assistance of ChatGPT.*

---

Feel free to customize this README further to match your project's needs and personal preferences.
