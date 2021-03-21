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

// Subscriber(uncomment next lines to see result)
// const subscriber = observable.subscribe(
//   res => console.log(res),
//   err => console.error(err),
//   () => console.log("Completed")
// );
