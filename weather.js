const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        const response = await axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        const data = response.data;
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weatherData').innerHTML = 'Error fetching the weather data';
    }
}

function displayWeather(data) {
    const weatherData = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherData').innerHTML = weatherData;
}
