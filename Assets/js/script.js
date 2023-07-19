// Store p element for day and time
var currentDay = $('#currentDay');

// Create a Day.js variable
var date = dayjs();

// Select all button variable
var saveBtns = document.querySelectorAll('.saveBtn');

// Time-block 
var timeCon = $('.container').children()

// Update time every 1min second
function updateDate() {
  var formattedDate = date.format('dddd, MMMM D, YYYY [Time:] h:mm A');
  currentDay.text(formattedDate);
}

// Set color of time-Blocks
function setColors() {
  // Get the current hour.
  var currentHour = date.format('H');

  // Loop through all of the time-block divs.
  timeCon.each((index, div) => {
    // function? How can DOM traversal be used to get the "hour-x" id of the.
    // Get the hour from the id of the div.
    var hour = element.id.split('-')[1];

    // Add the appropriate class to the div.
    if (hour < currentHour) {
      element.classList.add('past');
    } else if (hour == currentHour) {
      element.classList.add('present');
    } else {
      element.classList.add('future');
    }
  });
}

function saveText() {
  timeCon.each((index, element) => {
    var hour = element.id
    var text = element.querySelector('.description')
    text.innerHTML = localStorage.getItem(hour);
    console.log(hour, text)
    console.log("save?")
  })
}


// Create an event listener for the click event.
saveBtns.forEach(saveBtn => {
  saveBtn.addEventListener('click', function(e) {
    console.log('The element was clicked!');

    // use the id in the containing time-block as a key to save the user input in
    text = $(e.target).siblings()[1]
    var timeDiv = $(e.target).parent();
    var divId = timeDiv.attr("id");

    localStorage.setItem(divId, text.value);
    console.log(text, divId,);
  });
  saveText();
});





updateDate()
setColors();
saveText()

// Change color function of time-block every 5min
setInterval(setColors, 300000);

// Call Update time every 1min second
setInterval(updateDate, 60000);


$(function () {


  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
