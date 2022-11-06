// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //declaring variables
  var dayNow = dayjs().format("dddd, MMMM D");
  var hourNow = dayjs().hour();
  //identifying HTML elements
  var dayEL = $("#currentDay");
  var timeBlocks = $("div.container-lg").children();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // Iterates for each timeBlock div to set the colors with class names. Since each class is the same we can hard set them with a for loop, that way we don't have to remove them later when the hour changes.
  for(i = 0; i < timeBlocks.length; i++) {
    if(timeBlocks[i].id > hourNow) {
      timeBlocks[i].className = "row time-block future"
    } else if (timeBlocks[i].id < hourNow) {
      timeBlocks[i].className = "row time-block past"
    } else {
      timeBlocks[i].className = "row time-block current"
    };
  };

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Adds current day of the week and date to top of page.
  dayEL.textContent = dayNow;
});

