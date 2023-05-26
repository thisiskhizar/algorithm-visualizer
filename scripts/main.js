// Selecting HTML elements
const bars_container = document.querySelector(".bars_container");
const bars_value_container = document.querySelector(".bars_value_container");
const randomize_array = document.querySelector("#generate_array");
const size_input = document.querySelector("#size");
const speed_input = document.querySelector("#speed");
const bubbleBtn = document.getElementById("bubble_sort_btn");
const selectionBtn = document.getElementById("selection_sort_btn");
const mergeBtn = document.getElementById("merge_sort_btn");
const quickBtn = document.getElementById("quick_sort_btn");

// Constants for array range and number of bars
const minRange = 5;
const maxRange = 50;
let numOfBars = size_input.value;

// Initializing arrays and variables
let unsorted_array = new Array(numOfBars);
let bars_array = new Array();
let bars_value_array = new Array();
const margin_size = 0.3;

// Generates a random number between min and max (inclusive)
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Fills the unsorted_array with random numbers within the range
function createRandomArray() {
  for (let i = 0; i < numOfBars; i++) {
    unsorted_array[i] = randomNum(minRange, maxRange);
  }
  return unsorted_array;
}

// When the DOM content is loaded, create a random array and draw the bars
document.addEventListener("DOMContentLoaded", () => {
  createRandomArray();
  drawBars(unsorted_array);
});

// Draws the bars and their values based on the array
function drawBars(unsorted_array) {
  bars_container.innerHTML = "";
  bars_value_container.innerHTML = "";

  for (let i = 0; i < unsorted_array.length; i++) {
    // Render Bars
    bars_array[i] = document.createElement("div");
    bars_container.appendChild(bars_array[i]);
    bars_array[i].style = `margin: 0 ${margin_size}%; height: ${
      unsorted_array[i] * 10
    }px; width: ${
      100 / numOfBars - 2 * margin_size
    }%; background-color: #45aaf2;`;

    // Render Bar Values
    bars_value_array[i] = document.createElement("div");
    bars_value_container.appendChild(bars_value_array[i]);
    bars_value_array[i].style = `margin:0% ${margin_size}%; width: ${
      100 / numOfBars - 2 * margin_size
    }%; text-align: center; font-size: ${100 / numOfBars + 9}px;`;
    bars_value_array[i].innerHTML = unsorted_array[i];
  }
}

function update_array_size() {
  numOfBars = size_input.value;
  if (unsorted_array != undefined) {
    unsorted_array = [];
  }
  if (bars_value_array != undefined) {
    bars_value_array = [];
  }
  createRandomArray();
  drawBars(unsorted_array);
}

// Event listener for the randomize button
randomize_array.addEventListener("click", () => {
  createRandomArray();
  drawBars(unsorted_array);
});
size_input.addEventListener("input", update_array_size);

// Speed and delay calculations for bar updates
let speed = 100;
let delay_time = 10000 / (Math.floor(numOfBars) * speed);
let c_delay = 0;

speed_input.addEventListener("input", visulization_speed);

function visulization_speed() {
  let input_speed = speed_input.value;
  switch (parseInt(input_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 2000;
      break;
  }
  delay_time = 10000 / (Math.floor(numOfBars) * speed);
}

// Updates the bar's height and color
function update_bar(container, height, color) {
  window.setTimeout(function () {
    container.style = `margin: 0 ${margin_size}%; height: ${
      height * 10
    }px; width: ${
      100 / numOfBars - 2 * margin_size
    }%; background-color: ${color};`;
  }, (c_delay += delay_time));
}

// Disables the buttons while sorting
function disableButtons() {
  bubbleBtn.disabled = true;
  selectionBtn.disabled = true;
  mergeBtn.disabled = true;
  quickBtn.disabled = true;
  size_input.disabled = true;
  speed_input.disabled = true;
  randomize_array.disabled = true;
}

// Add event listeners to the buttons
bubbleBtn.addEventListener("click", () => {
  disableButtons();
  bubbleSort(unsorted_array);
});
selectionBtn.addEventListener("click", () => {
  disableButtons();
  selectionSort(unsorted_array);
});
mergeBtn.addEventListener("click", () => {
  disableButtons();
  mergeSort(unsorted_array);
});
quickBtn.addEventListener("click", () => {
  disableButtons();
  quickSort(unsorted_array);
});

// Enables the buttons after sorting
function enableButtons() {
  window.setTimeout(function () {
    bubbleBtn.disabled = false;
    selectionBtn.disabled = false;
    mergeBtn.disabled = false;
    quickBtn.disabled = false;
    size_input.disabled = false;
    speed_input.disabled = false;
    randomize_array.disabled = false;
  }, (c_delay += delay_time));
}
