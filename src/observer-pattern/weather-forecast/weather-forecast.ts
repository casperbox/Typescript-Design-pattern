class WeatherForecastStation {
    constructor(){
        var weatherData: WeatherData = new WeatherData();
        var currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
        weatherData.setMeasurements(80, 65, 30.4);
    }
}