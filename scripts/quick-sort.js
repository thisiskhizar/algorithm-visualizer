function changeQuickText(a, b) {
  window.setTimeout(function () {
    var temp2 = bars_value_array[a].innerHTML;
    bars_value_array[a].innerHTML = bars_value_array[b].innerHTML;
    bars_value_array[b].innerHTML = temp2;
  }, (c_delay += delay_time));
}

function quickSort() {
  c_delay = 0;

  quick_sort(0, numOfBars - 1);

  enableButtons()
}

function quick_partition(start, end) {
  // Choose a pivot element and partition the array into two parts
  var i = start + 1;
  var piv = unsorted_array[start];
  update_bar(bars_array[start], unsorted_array[start], "#fed330"); //Color update

  for (var j = start + 1; j <= end; j++) {
    if (unsorted_array[j] < piv) {
      update_bar(bars_array[j], unsorted_array[j], "#fed330"); //Color update

      update_bar(bars_array[i], unsorted_array[i], "#eb3b5a"); //Color update
      update_bar(bars_array[j], unsorted_array[j], "#eb3b5a"); //Color update

      // Swap elements and update the bars
      var temp = unsorted_array[i];
      unsorted_array[i] = unsorted_array[j];
      unsorted_array[j] = temp;
      changeQuickText(i, j);

      update_bar(bars_array[i], unsorted_array[i], "#eb3b5a"); //Height update
      update_bar(bars_array[j], unsorted_array[j], "#eb3b5a"); //Height update

      update_bar(bars_array[i], unsorted_array[i], "#45aaf2"); //Height update
      update_bar(bars_array[j], unsorted_array[j], "#45aaf2"); //Height update

      i += 1;
    }
  }
  update_bar(bars_array[start], unsorted_array[start], "#eb3b5a"); //Color update
  update_bar(bars_array[i - 1], unsorted_array[i - 1], "#eb3b5a"); //Color update

  // Swap the pivot element with the correct position in the array
  var temp = unsorted_array[start];
  unsorted_array[start] = unsorted_array[i - 1];
  unsorted_array[i - 1] = temp;
  changeQuickText(start, i - 1);

  update_bar(bars_array[start], unsorted_array[start], "#eb3b5a"); //Height update
  update_bar(bars_array[i - 1], unsorted_array[i - 1], "#eb3b5a"); //Height update

  for (var t = start; t <= i; t++) {
    update_bar(bars_array[t], unsorted_array[t], "#20bf6b"); //Color update
  }

  // Return the position of the pivot element
  return i - 1;
}

function quick_sort(start, end) {
  // Recursively sort the array using quicksort algorithm
  if (start < end) {
    // Recursively call quick_sort for the left and right partitions
    var piv_pos = quick_partition(start, end);
    quick_sort(start, piv_pos - 1);
    quick_sort(piv_pos + 1, end);
  }
}
