import axios from "axios";

export async function fetchWeather(city, setError) {
  console.log(process.env.REACT_APP_RAPID_API_KEY);

  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: city,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    setError("");
    console.log(response.data);
    return response.data;
  } catch (error) {
    setError("city not found");
    return error;
  }
}
