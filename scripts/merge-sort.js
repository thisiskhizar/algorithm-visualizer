function changeMergeText(a, b) {
  window.setTimeout(function () {
    bars_value_array[a].innerHTML = b;
  }, (c_delay += delay_time));
}

function mergeSort() {
  c_delay = 0;

  merge_partition(0, numOfBars - 1);

  enableButtons();
}

function merge_sort(start, mid, end) {
  // Merge two sub-arrays in sorted order

  var p = start,
    q = mid + 1;

  var Arr = [], // Temporary array to store the merged sub-arrays
    k = 0;

  for (var i = start; i <= end; i++) {
    // Compare elements from the two sub-arrays and merge them in sorted order
    if (p > mid) {
      Arr[k++] = unsorted_array[q++];
      update_bar(bars_array[q - 1], unsorted_array[q - 1], "#eb3b5a"); //Color update
    } else if (q > end) {
      Arr[k++] = unsorted_array[p++];
      update_bar(bars_array[p - 1], unsorted_array[p - 1], "#eb3b5a"); //Color update
    } else if (unsorted_array[p] < unsorted_array[q]) {
      Arr[k++] = unsorted_array[p++];
      update_bar(bars_array[p - 1], unsorted_array[p - 1], "#eb3b5a"); //Color update
    } else {
      Arr[k++] = unsorted_array[q++];
      update_bar(bars_array[q - 1], unsorted_array[q - 1], "#eb3b5a"); //Color update
    }
  }

  for (var t = 0; t < k; t++) {
    // Copy the merged elements back to the original array and update the bars
    changeMergeText(start, Arr[t]);
    unsorted_array[start++] = Arr[t];

    update_bar(bars_array[start - 1], unsorted_array[start - 1], "#20bf6b"); //Color update
  }
}

function merge_partition(start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    update_bar(bars_array[mid], unsorted_array[mid], "#fed330"); //Color update

    merge_partition(start, mid);
    merge_partition(mid + 1, end);

    merge_sort(start, mid, end);
  }
}
