var now = moment();
var currentDay = document.querySelector("#currentDay");
var hours = $(".hours");
var currentHour = moment().hour();
var saveBtn = document.getElementsByClassName("savebtn");

function getDayOfWeek() {
    var dayOfWeek = moment().day();
    
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

function getMonth() {
    var month = moment().month();
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

function getDayOfMonth() {
    var dayOfMonth = moment().date();

    if (dayOfMonth === 1) {
        return (dayOfMonth + "st")
    }
    else if (dayOfMonth === 2) {
        return (dayOfMonth + "nd")
    }
    else {
        return (dayOfMonth + "th")
    }
}

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

var auditTime = function() {
    $(".hours").each(function(){
        var hour = parseInt(
            $(this)
            .attr("id")
        )

        if (hour < currentHour){
            $(this).removeClass("bg-danger");
            $(this).removeClass("bg-success");
            $(this).addClass("bg-secondary");
        }
        else if (hour === currentHour){
            $(this).removeClass("bg-success");
            $(this).removeClass("bg-secondary");
            $(this).addClass("bg-danger");
        }
        else {
            $(this).addClass("bg-success");
        }
    });
}

$(".hours").click(function(){
    var hour = event.target;
    var input = document.createElement("textarea"); 
    input.onblur = pushText;
    hour.appendChild(input);
   
});

function pushText() {
    var id = $(this).parent().attr("id")
    console.log(id);
    var input = $(this).val();
    console.log(input);
    var parentText = $(this).parent().text(input);
    console.log(parentText);
}

function saveEvent() {
    var id = $(this).parent().attr("id");
    console.log(id);
    var textContent = $(this).parent().children().eq(1).text();
    console.log(textContent)
    localStorage.setItem(id, textContent);
}

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

retrieveStorage();
$(".saveBtn").click(saveEvent);
setInterval(auditTime, 1800000);
displayDate();
auditTime(hours);