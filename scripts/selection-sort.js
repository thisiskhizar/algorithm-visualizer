// Function to update the values of bars during selection sort
function changeSelectionText(a, b) {
  window.setTimeout(function () {
    var temp2 = bars_array2[a].innerHTML;
    bars_array2[a].innerHTML = bars_array2[b].innerHTML;
    bars_array2[b].innerHTML = temp2;
  }, (c_delay += delay_time));
}

// Selection sort implementation
function selectionSort() {
  c_delay = 0;

  // Loop through the array
  for (var i = 0; i < numOfBars - 1; i++) {
    update_bar(bars_array[i], unsorted_array[i], "#eb3b5a"); //Color update

    index_min = i;

    // Iterate through the remaining elements of the array
    for (var j = i + 1; j < numOfBars; j++) {
      update_bar(bars_array[j], unsorted_array[j], "#fed330"); //Color update

      // Check if the value at index j is smaller than the current minimum value
      if (unsorted_array[j] < unsorted_array[index_min]) {
        if (index_min != i) {
          update_bar(
            bars_array[index_min],
            unsorted_array[index_min],
            "#45aaf2"
          ); //Color update
        }
        index_min = j; // Update the index of minimum element
        update_bar(bars_array[index_min], unsorted_array[index_min], "#eb3b5a"); //Color update
      } else {
        update_bar(bars_array[j], unsorted_array[j], "#45aaf2"); //Color update
      }
    }

    // Swap the minimum element with the current element (if they are different)
    if (index_min != i) {
      var temp = unsorted_array[index_min];
      unsorted_array[index_min] = unsorted_array[i];
      unsorted_array[i] = temp;

      changeSelectionText(index_min, i);

      update_bar(bars_array[index_min], unsorted_array[index_min], "#eb3b5a"); // Height update
      update_bar(bars_array[i], unsorted_array[i], "#eb3b5a"); // Height update
      update_bar(bars_array[index_min], unsorted_array[index_min], "#45aaf2"); // Color update
    }
    update_bar(bars_array[i], unsorted_array[i], "#20bf6b"); // Color update
  }
  update_bar(bars_array[i], unsorted_array[i], "#20bf6b"); // Color update

  enableButtons()
}
