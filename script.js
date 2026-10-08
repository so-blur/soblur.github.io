/*
This is where we can add interactive features
to the website.

```
For now, we're just adding a small welcome message.
```

*/

console.log("Website loaded successfully!");

// Example button interaction

const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button) {

```
button.addEventListener("click", function() {

    console.log("Button clicked!");

});
```

});
