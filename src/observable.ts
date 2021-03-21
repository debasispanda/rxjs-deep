import { Observable } from "rxjs";

const observable = new Observable(observer => {
  observer.next("Hi!");
  observer.next("Hello!");
  setTimeout(() => observer.next("How are you?"), 1000);
});

observable.subscribe(
  res => console.log(res),
  err => console.error(err),
  () => console.log("Completed")
);
