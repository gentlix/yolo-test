type ForecastDay = {
  date: string;
  day: {
    maxtemp_f: number;
    mintemp_f: number;
  };
  hour: Hour[];
};

export type Hour = {
  time: string;
  temp_f: number;
  condition: {
    icon: string;
  };
};

type Location = {
  name: string;
  localtime: string;
};

type Current = {
  temp_f: number;
  feelslike_f: number;
};

export type LocationData = {
  forecast: { forecastday: ForecastDay[] };
  location: Location;
  current: Current;
};

export async function getWeatherAsync(city: string): Promise<LocationData> {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
  );
  return await response.json();
}
