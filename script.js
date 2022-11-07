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
  var saveButtons = $('button').toArray();
  
  // Adds current day of the week and date to top of page.
  dayEL.textContent = dayNow;
  
  //starts iterating through each time block
  for(i = 0; i < timeBlocks.length; i++) {

    //sets classes for colors based on current hour
    if(timeBlocks[i].id > hourNow) {
      timeBlocks[i].className = "row time-block future"
    } else if (timeBlocks[i].id < hourNow) {
      timeBlocks[i].className = "row time-block past"
    } else {
      timeBlocks[i].className = "row time-block current"
    };

    //adds event listeners to each button that call the following function on click
    saveButtons[i].addEventListener("click", function(event){
      //adds the innerHTML of the <textarea> next to the button to local storage with the key of the id from the div the button is in
      localStorage.setItem(event.target.parent().id, event.target.prev().innerHTML);
    });

    //loads the local storage text if it exists
    if(localStorage) {
      timeBlocks[i].children[1].innerHTML = localStorage.getItem(timeBlocks[i].id);
    };

  }; 
});