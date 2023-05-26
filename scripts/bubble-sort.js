// Function to update the values of adjacent bars during bubble sort

function updateBubbleValues(n) {
  window.setTimeout(() => {
    let temp2 = [];
    temp2[n] = bars_value_array[n].innerHTML;
    bars_value_array[n].innerHTML = bars_value_array[n + 1].innerHTML;
    bars_value_array[n + 1].innerHTML = temp2[n];
  }, (c_delay += delay_time));
}

// Bubble sort implementation
function bubbleSort(array) {
  c_delay = 0;
  let i, j;

  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - (i + 1); j++) {
      update_bar(bars_array[j], array[j], "#fed330"); // Yellow

      // If current element is greater than the next element, swap them
      if (array[j] > array[j + 1]) {
        update_bar(bars_array[j], array[j], "#eb3b5a"); // Red
        update_bar(bars_array[j + 1], array[j + 1], "#eb3b5a"); // Red

        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        // Update the values of the adjacent bars
        updateBubbleValues(j);

        update_bar(bars_array[j], array[j], "#eb3b5a"); // Red
        update_bar(bars_array[j + 1], array[j + 1], "#eb3b5a"); // Red
      }
      update_bar(bars_array[j], array[j], "#45aaf2"); // Blue
    }
    update_bar(bars_array[j], array[j], "#20bf6b"); // Green
  }
  update_bar(bars_array[0], array[0], "#20bf6b"); // Green

  enableButtons();
  return array;
}
