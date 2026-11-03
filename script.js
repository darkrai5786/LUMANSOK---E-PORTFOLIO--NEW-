const button = document.getElementById("hello-btn");
// document = the whole page. getElementById finds the element with that id.
// const stores it in a variable named "button" that can't be reassigned.

const message = document.getElementById("message");
// same thing, for the empty paragraph

button.addEventListener("click", function () {
  // "when the button is clicked, run the function in here"
  message.textContent = "Welcome to my corner of the internet! 🌐";
  // sets the paragraph's text, so the message appears
});