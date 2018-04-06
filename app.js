class EventObserver {
    constructor() {
        this.Observers = [];
    }
    subscribe(fn) { // adds a function to array
        this.Observers.push(fn);
        console.log(`You are subscribed to ${fn.name}`);
    }

    unsubscribe(fn) { // removes a function from array using 'filter' method
        this.Observers = this.Observers.filter(f => f !== fn);
        console.log(`You are unsubscribed from ${fn.name}`);
    }

    publish(item) {
        this.Observers.forEach(observer => {
            console.log('I am from publish');
            observer.call();
        });
    }
}

eventObserver = new EventObserver;

document.querySelector('.sub-ms').addEventListener('click', () => {
    eventObserver.subscribe(getMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
    eventObserver.unsubscribe(getMilliseconds);
});

function getMilliseconds() {
    console.log(`${new Date().getMilliseconds()}`)
}

document.querySelector('.publish').addEventListener('click', () => {
    eventObserver.publish();
})