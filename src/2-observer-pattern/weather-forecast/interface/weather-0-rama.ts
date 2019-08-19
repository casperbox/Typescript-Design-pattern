interface Observer{
    update(temp: number, humidity: number, pressure: number);
}

interface Subject{
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifyObservers();
}

interface DisplayElement{
    display();
}