$(function () {
  var hourNow = dayjs().hour();
  //identifying HTML elements
  var timeBlocks = $("div.container-lg").children();
  var saveButtons = $('button').toArray();
  
  // Adds current day of the week and date to top of page.
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  
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
      //adds the value of the <textarea> next to the button to local storage with the key of the id from the div the button is in
      localStorage.setItem(event.target.parentElement.id, event.target.previousElementSibling.value);
    });

    //loads the local storage text if it exists
    if(localStorage) {
      timeBlocks[i].children[1].innerHTML = localStorage.getItem(timeBlocks[i].id);
    };
  }; 
});