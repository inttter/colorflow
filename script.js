const gradientBox = document.getElementById('gradientBox');
const gradientInput = document.getElementById('gradientInput');

// Function to update gradient box based on user input
function updateGradientBox() {
  const userInput = gradientInput.value.trim();

  // Check if the entered value is a valid gradient or RGB color
  if (isValidGradient(userInput)) {
    gradientBox.style.background = userInput;
  } else if (isValidHexColor(userInput)) {
    gradientBox.style.background = userInput;
  }
}

// Update gradient box when user inputs a gradient or RGB color
gradientInput.addEventListener('input', updateGradientBox);

gradientBox.addEventListener('click', (e) => {
  const x = e.offsetX / gradientBox.clientWidth;
  const y = e.offsetY / gradientBox.clientHeight;
  const color = getColorAtPosition(x, y);
  if (color && !isValidGradient(color) && !isValidHexColor(color)) {
    gradientInput.value = color;
    gradientBox.style.background = color;
  }
});

function getColorAtPosition(x, y) {
  // Function to get color remains the same as previous implementations
  // ...
}

function isValidGradient(value) {
  // Function to check if the entered value is a valid gradient syntax
  return /^linear-gradient\(.+\)$/i.test(value);
}

function isValidHexColor(value) {
  // Function to check if the entered value is a valid hexadecimal color code
  return /^#([0-9A-F]{3}){1,2}$/i.test(value);
}

// Initial call to update gradient box based on default input value
updateGradientBox();

const previewLink = document.getElementById('previewLink');

gradientInput.addEventListener('input', updatePreviewLink);

function updatePreviewLink() {
  const userInput = gradientInput.value.trim();
  const encodedValue = encodeURIComponent(userInput);
  previewLink.href = `preview.html?gradient=${encodedValue}`;
}