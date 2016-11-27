const API_KEY: string = '8467a5bbc2ce1b6a3bbd3b270ca3e01e';

class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

const greeter = new Greeter("Hello, world!");

document.body.innerHTML = greeter.greet();


if (navigator.geolocation) {
    // const weather = new Weather();

    navigator.geolocation.getCurrentPosition(function(position) {
    });

    document.body.innerHTML = greeter.greet();
} else {
    /* geolocation IS NOT available */
}
