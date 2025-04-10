async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const apiKey = "your_api_key_here"; // Replace with your OpenWeatherMap API key
  
    if (city === "") {
      alert("Please enter a city name.");
      return;
    }
  
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
        `;
      } else {
        document.getElementById("result").innerHTML = <p>City not found. Please try again.</p>;
      }
    } catch (error) {
      document.getElementById("result").innerHTML = <p>Failed to fetch weather data.</p>;
      console.error(error);
    }
  }