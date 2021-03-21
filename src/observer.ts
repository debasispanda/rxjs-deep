import { Observable } from "rxjs";

// Observable
const observable = new Observable(observer => {
  observer.next("Hi!");
  observer.next("Hello!");
  setTimeout(() => {
    observer.next("How are you?");
    observer.complete();
  }, 1000);
});

// Observer
const observer = {
  next(res) {
    console.log(res);
  },
  error(err) {
    console.error(err);
  },
  complete() {
    console.log("Completed");
  }
};

// Subscriber(uncomment next line to see result)
// const subscriber = observable.subscribe(observer);

/**
 * Hi!
 * Hello!
 * How are you? // after 1 second
 * Completed
 */

// Partial Observer
const partialObserver = {
  next(res) {
    console.log(res);
  }
};

// Subscriber(uncomment next line to see result)
// const partialSubscriber = observable.subscribe(partialObserver);

/**
 * Hi!
 * Hello!
 * How are you? // after 1 second
 */
