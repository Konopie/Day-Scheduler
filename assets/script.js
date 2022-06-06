// declare variables for functions
var currentDay = document.querySelector("#currentDay");
var hours = $(".hours");
var currentHour = moment().hour();
var saveBtn = document.getElementsByClassName("savebtn");

// function to conver the day number into words 
function getDayOfWeek() {
    // current day of week
    var dayOfWeek = moment().day();
    
    // convert number day of week into words 
    if (dayOfWeek === 0) {
        return "Sunday";
    }
    else if (dayOfWeek === 1) {
        return "Monday"
    }
    else if (dayOfWeek === 2) {
        return "Tuesday"
    }
    else if (dayOfWeek === 3) {
        return "Wednesday"
    }
    else if (dayOfWeek === 4) {
        return "Thursday"
    }
    else if (dayOfWeek === 5) {
        return "Friday"
    }
    else if (dayOfWeek === 6) {
        return "Saturday"
    }
    else {
        return "GroundHogs Day"
    }
}

// function to convert month numbers to words
function getMonth() {
    // get current month
    var month = moment().month();
    // convert month numbers to words
    if (month === 0) {
        return "January"
    }
    else if (month === 1) {
        return "Febuary"
    }
    else if (month === 2) {
        return "March"
    }
    else if (month === 3) {
        return "April"
    }
    else if (month === 4) {
        return "May"
    }
    else if (month === 5) {
        return "June"
    }
    else if (month === 6) {
        return "July"
    }
    else if (month === 7) {
        return "August"
    }
    else if (month === 8) {
        return "September"
    }
    else if (month === 9) {
        return "October"
    }
    else if (month === 10) {
        return "November"
    }
    else if (month === 11) {
        return "December"
    }
    else {
        return "HearthFire"
    }
}

// function to get the number day of the month
function getDayOfMonth() {
    // get current day of month
    var dayOfMonth = moment().date();

    // if the first add st
    if (dayOfMonth === 1) {
        return (dayOfMonth + "st")
    }
    // if second add nd
    else if (dayOfMonth === 2) {
        return (dayOfMonth + "nd")
    }
    // the rest add th
    else {
        return (dayOfMonth + "th")
    }
}

// display current date 
function displayDate() {
    // create variables to hold results of get date functions
    var dayOfWeek = getDayOfWeek();
    var month = getMonth();
    var dayOfMonth = getDayOfMonth();

    // log to confirm
    // console.log(dayOfWeek);
    // console.log(month);
    // console.log(dayOfMonth);

    // put them together and display to the top of the page
    currentDay.textContent = (dayOfWeek + ", " + month + " " + dayOfMonth)
}

// check urgentcy
var auditTime = function() {
    // repeat for each hour
    $(".hours").each(function(){
        // get id number
        var hour = parseInt(
            $(this)
            .attr("id")
        )

        // if in past make grey
        if (hour < currentHour){
            $(this).removeClass("bg-danger");
            $(this).removeClass("bg-success");
            $(this).addClass("bg-secondary");
        }
        // if current hour make red
        else if (hour === currentHour){
            $(this).removeClass("bg-success");
            $(this).removeClass("bg-secondary");
            $(this).addClass("bg-danger");
        }
        // if not current or past (future) make green
        else {
            $(this).addClass("bg-success");
        }
    });
}

// create text area on click
$(".hours").click(function(){
    // target hour
    var hour = event.target;
    //create input
    var input = document.createElement("textarea"); 
    // push text on blur
    input.onblur = pushText;
    // add input to clicked hour
    hour.appendChild(input);
   
});

// push text into time block
function pushText() {
    // get parents id 
    var id = $(this).parent().attr("id")
    console.log(id);
    // get input
    var input = $(this).val();
    console.log(input);
    // set time block text content to input 
    var parentText = $(this).parent().text(input);
    console.log(parentText);
}

// save text to storage
function saveEvent() {
    // get the parents id
    var id = $(this).parent().attr("id");
    console.log(id);
    // get the text attribute of the parents second child
    var textContent = $(this).parent().children().eq(1).text();
    console.log(textContent)
    localStorage.setItem(id, textContent);
}

// check each hour for saved tasks
function retrieveStorage() {
    
    var nine = localStorage.getItem("9am");
    console.log(nine);
    $("#9").append(nine);

    var ten = localStorage.getItem('10am');
    console.log(ten);
    $("#10").append(ten);

    var eleven = localStorage.getItem('11am');
    console.log(eleven);
    $("#11").append(eleven);

    var twelve = localStorage.getItem('12pm');
    console.log(twelve);
    $("#12").append(twelve);

    var one = localStorage.getItem('1pm');
    console.log(one);
    $("#13").append(one);

    var two = localStorage.getItem('2pm');
    console.log(two);
    $("#14").append(two);

    var three = localStorage.getItem('3pm');
    console.log(three);
    $("#15").append(three);

    var four = localStorage.getItem('4pm');
    console.log(four);
    $("#16").append(four);

    var five = localStorage.getItem('5pm');
    console.log(five);
    $("#17").append(five);

    
}

// run when page loads
retrieveStorage();
$(".saveBtn").click(saveEvent);
setInterval(auditTime, 1800000);
displayDate();
auditTime(hours);