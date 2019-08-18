class CurrentConditionsDisplay implements Observer, DisplayElement{
    temperature: number;
    humidity: number;
    weatherData: Subject;

    constructor(weatherData: Subject){
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number){
        this.temperature =  temperature;
        this.humidity = humidity;
        this.display();
    }

    display(){
        console.log(`Current condition ${this.temperature}F degrees and ${this.humidity}% humidity`);
    }
}