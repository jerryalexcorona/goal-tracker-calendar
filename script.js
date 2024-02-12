// script.js
// Get all the table cells
var cells = document.getElementsByTagName("td");

// Loop through each cell
for (var i = 0; i < cells.length; i++) {
  // Loop 5 times to create 5 goals and 5 checkboxes
  for (var j = 0; j < 5; j++) {
    // Create an input element for the text
    var textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.className = "inner-block";
    textInput.placeholder = "Enter your goal";
    textInput.value = "Goal" + (j + 1);
    // Use a different name and value for each text input
    textInput.name = "goal" + (j + 1);
    textInput.value = "goal" + (j + 1);

    // Create an input element for the checkbox
    var checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.className = "inner-block";
    // Use a different name and value for each checkbox
    checkboxInput.name = "check" + (j + 1);
    checkboxInput.value = "check" + (j + 1);

    // Append the input elements to the cell
    cells[i].appendChild(textInput);
    cells[i].appendChild(checkboxInput);

    // Create a unique key for each checkbox based on the cell index and the checkbox name
    var key = "cell" + i + "-" + checkboxInput.name;

    // Load the checkmark from the local storage if it exists, or set it to false by default
    var checkmark = localStorage.getItem(key) || false;

    // Set the checkbox state to the checkmark value
    checkboxInput.checked = checkmark;

    // Add an event listener to the checkbox to update the local storage when the checkbox state changes
    checkboxInput.addEventListener("change", function() {
      // Get the key of the current checkbox
      var currentKey = "cell" + i + "-" + this.name;

      // Get the current state of the checkbox
      var currentState = this.checked;

      // Save the current state to the local storage with the key
      localStorage.setItem(currentKey, currentState);
    });
  }
}

// Get all the text inputs with the class "inner-block"
var goalInputs = document.getElementsByClassName("inner-block");

// Loop through the text inputs
for (var i = 0; i < goalInputs.length; i++) {
  // Add an event listener to each text input
  goalInputs[i].addEventListener("input", syncGoals);
}

// Define the function that will handle the event
function syncGoals() {
  // Get the name and value of the current text input
  var currentName = this.name;
  var currentValue = this.value;

  // Loop through the text inputs again
  for (var i = 0; i < goalInputs.length; i++) {
    // Check if the text input has the same name as the current one
    if (goalInputs[i].name === currentName) {
      // Update the value of the text input to match the current one
      goalInputs[i].value = currentValue;
    }
  }
}