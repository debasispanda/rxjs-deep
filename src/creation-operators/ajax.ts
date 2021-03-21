import { ajax } from "rxjs/ajax";

const URL = "https://api.github.com/users?per_page=5";

const obs$ = ajax(URL);
// uncomment next line to see output
// obs$.subscribe(userResponse => console.log("users: ", userResponse));

const obsJSON$ = ajax.getJSON(URL);
// uncomment next line to see output
// obsJSON$.subscribe(userResponse => console.log("users: ", userResponse));
