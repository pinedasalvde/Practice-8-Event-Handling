# Practice-8-Event-Handling

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Handling</title>
</head>
<body>
  <!-- Form section: collects user information -->
  <form id="infoForm">
    <!-- Name input field: lets the user type their name -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <!-- Age input field: lets the user enter their age as a number -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="0">

    <!-- Button: triggers JavaScript to display the input values -->
    <button type="button" id="showBtn">Show Values</button>
  </form>

  <!-- External JavaScript file that handles form behavior -->
  <script src="script.js"></script>
</body>
</html>
```

```javascript
// Section 1: Select form elements
const form = document.getElementById('infoForm');   // whole form (used for reset)
const nameInput = document.getElementById('name');  // name field
const ageInput = document.getElementById('age');    // age field
const showBtn = document.getElementById('showBtn'); // button

// Section 2: Show an alert with the entered values when the button is clicked
showBtn.addEventListener('click', () => {
  alert(`Name: ${nameInput.value}\nAge: ${ageInput.value}`);
});

// Section 3: Clear the form when the Escape key is pressed
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    form.reset();
  }
});
```
