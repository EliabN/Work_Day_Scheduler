// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $('#currentDay');
var date = dayjs();
var saveBtns = document.querySelectorAll('.saveBtn');

var store = [];

var timeDivs = $('.container').children()


function updateDate() {
  var formattedDate = date.format('dddd, MMMM D, YYYY [Time:] h:mm A');
  currentDay.text(formattedDate);
}


function setColors() {
  // Get the current hour.
  var currentHour = date.format('H');

  // Loop through all of the time-block divs.
  timeDivs.each((index, element) => {
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

setColors();
setInterval(setColors,120000);

setInterval(updateDate, 1000);


// TODO: Add a listener for click events on the save button. This code should
// Create an event listener for the click event.
saveBtns.forEach(saveBtn => {
  saveBtn.addEventListener('click', function(e) {
    console.log('The element was clicked!');
    saveButton();
    
    // use the id in the containing time-block as a key to save the user input in
    text = $(e.target).siblings()[1]
    var str = $(e.target).parent();
    var dd = str.attr("id");

    localStorage.setItem(dd, text.value);
    text.innerHTML = localStorage.getItem(dd);
    console.log(text, dd,);
  });
});


function saveButton() {
  //document.getElementById(".description").innerHTML = "vjj";
  timeDivs.each((index, element) => {
    var hour = element.id
    var text = $(e.target).siblings()[1];
    text.innerHTML = text.value;
    console.log("save?")
  
  })
}

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
