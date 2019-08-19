class WeatherData implements Subject{
    observers: Array<Observer>;
    temperature: number;
    humidity: number;
    pressure: number;

    constructor(){
        this.observers = new Array<Observer>();
    }

    registerObserver(o: Observer){
        this.observers.push(o);
    }

    removeObserver(o: Observer){
        var i = this.observers.indexOf(o);
        if(i >= 0){
            this.observers.splice(i);
        }
    }

    notifyObservers(){
        this.observers.forEach((observer: Observer) => {
            observer.update(this.temperature, this.humidity, this.pressure);
        });
    }

    measurementChanged(){
        this.notifyObservers();
    }

    setMeasurements(temperature, humidity, pressure){
        this.temperature = temperature;
        this.humidity = humidity;
        this,pressure = pressure;
        this.measurementChanged();
    }
}