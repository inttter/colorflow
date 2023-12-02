const gradientBox = document.getElementById('gradientBox');
const gradientInput = document.getElementById('gradientInput');

// Function to update gradient box based on user input
function updateGradientBox() {
  const userInput = gradientInput.value.trim();

  // Check if the entered value is a valid gradient or RGB color or hexadecimal color code
  if (isValidGradient(userInput)) {
    gradientBox.style.background = userInput;
  } else if (isValidRGB(userInput)) {
    gradientBox.style.background = userInput;
  } else if (isValidHexColor(userInput)) {
    gradientBox.style.background = userInput;
  }
}

// Update gradient box when user inputs a gradient or RGB color or hexadecimal color code
gradientInput.addEventListener('input', updateGradientBox);

gradientBox.addEventListener('click', (e) => {
  const x = e.offsetX / gradientBox.clientWidth;
  const y = e.offsetY / gradientBox.clientHeight;
  const color = getColorAtPosition(x, y);
  if (
    color &&
    !isValidGradient(color) &&
    !isValidRGB(color) &&
    !isValidHexColor(color)
  ) {
    gradientInput.value = color;
    gradientBox.style.background = color;
  }
});

function getColorAtPosition(x, y) {
  // Function to get color
  // ...
}

function isValidGradient(value) {
  // Function to check if the entered value is a valid gradient syntax
  return /^linear-gradient\(.+\)$/i.test(value);
}

function isValidRGB(value) {
  // Function to check if the entered value is a valid RGB color
  return /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/i.test(value);
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

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Function to generate a random gradient with 2 or 3 colors
function generateRandomGradient() {
  let gradient = 'linear-gradient(to right, ';
  const numColors = Math.floor(Math.random() * 2) + 2; // Generate 2 or 3 colors for the gradient
  let gradientValue = '';

  for (let i = 0; i < numColors; i++) {
    const color = getRandomColor();
    gradientValue += color;
    gradient += color;
    gradient += i === numColors - 1 ? ')' : ', '; // Add comma if not the last color
  }

  // Apply the generated gradient to the background
  const gradientBox = document.getElementById('gradientBox');
  gradientBox.style.background = gradient;

    // Display the generated gradient or RGB value in the input box
    const gradientInput = document.getElementById('gradientInput');
    gradientInput.value = gradientValue;
  
    // Redirect to the preview page with the generated gradient value
    const encodedValue = encodeURIComponent(gradient);
    window.open(`preview.html?gradient=${encodedValue}`, '_blank');
  }
  
  // Add event listener to the button
  document.getElementById('randomGradientBtn').addEventListener('click', generateRandomGradient);

  document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy');
    const gradientInput = document.getElementById('gradientInput');
  
    copyButton.addEventListener('click', () => {
      // Select the text in the input field
      gradientInput.select();
      gradientInput.setSelectionRange(0, 99999); // For mobile devices //
  
      try {
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        console.log('Text copied to clipboard:', gradientInput.value);
  
        // Change tooltip text to "Copied!" temporarily
        const tooltip = copyButton.querySelector('.tooltip');
        tooltip.innerText = tooltip.getAttribute('data-text-end');
        setTimeout(() => {
          tooltip.innerText = tooltip.getAttribute('data-text-initial');
        }, 300000); // high time to prevent tooltip text from duplicating, nobody is spending more than 5 minutes on this website, lets be honest. 
      } catch (err) {
        console.error('Failed to copy text to clipboard:', err);
      }
    });
  });