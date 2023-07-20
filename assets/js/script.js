// Store p element for day and time
var currentDay = $('#currentDay');
// Create a Day.js variable
var date = dayjs();
// Select all buttons variable
var saveBtns = document.querySelectorAll('.saveBtn');
// Select the time-block container
var timeCon = $('.container').children()

// Update time function
function updateDate() {
  // Set format of date-time
  var formattedDate = date.format('dddd, MMMM D, YYYY [Time:] h:mm A');
  // Display current date-time
  currentDay.text(formattedDate);
}

// Set color of time-Blocks
function setColors() {
  // Get the current hour.
  var currentHour = date.format('H');

  // Loop through all of the time-block container.
  timeCon.each((index, div) => {
    // Get the hour from the id of the div.
    var hour = div.id.split('-')[1];

    // Add the appropriate class to the div.
    if (hour < currentHour) {
      // Remove class
      div.classList.remove('present', 'future')
      // Add appropriate class
      div.classList.add('past');
    } else if (hour == currentHour) {
      div.classList.remove('past', 'future');
      div.classList.add('present');
    } else {
      div.classList.remove('past', 'present');
      div.classList.add('future');
    }
  });
};

// Create an event listener for the click event.
saveBtns.forEach(saveBtn => {
  // Click event button
  saveBtn.addEventListener('click', function(e) {
    // Select the textarea in div
    text = $(e.target).siblings()[1].value;

    // Select div (time-block)
    var timeDiv = $(e.target).parent();
    // Retrieve div Id
    var divId = timeDiv.attr("id");
    
    // Use the id in the containing time-block as a key to save the user input in
    localStorage.setItem(divId, text);
  });
  saveText();
});

// Save function that save the text
function saveText() {

   // Loop through all of the time-block container.
  timeCon.each((index, div) => {
    // Store div's (id=hour-x)
    var hour = div.id
    // Select the textarea in div
    var text = div.querySelector('.description')
    // Write the stored text assigned to the div in textarea
    text.innerHTML = localStorage.getItem(hour);
  })
}


// Set time
updateDate()
// Set color
setColors();
// Set text
saveText()

// Change color function of time-block every 5min
setInterval(setColors, 300000);

// Call Update time every 1min second
setInterval(updateDate, 60000);