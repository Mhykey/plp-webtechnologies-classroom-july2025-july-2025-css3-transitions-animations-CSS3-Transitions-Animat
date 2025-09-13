// ================================
// Part 2: JavaScript Functions Demo
// ================================

// Global variable
let lastResult = 0;

// Function with parameters + return value
function addNumbers(a, b) {
  let sum = a + b; // local variable
  return sum;
}

// Function to display result
function showSum() {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;

  lastResult = addNumbers(num1, num2); // reuse function
  document.getElementById("sum-result").textContent =
    "Sum: " + lastResult;
}

// ================================
// Part 3: JS + CSS Animations
// ================================

// Animate box on button click
const animateBtn = document.getElementById("animate-btn");
const dynamicBox = document.getElementById("dynamic-box");

animateBtn.addEventListener("click", () => {
  dynamicBox.classList.toggle("animate");
});

// Modal logic
const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
