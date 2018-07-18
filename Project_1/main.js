//Update left column : total days; Missed Lessons; Average mark; Total students;

function updateTable() {
    let allUsers = document.getElementById("totalResult");
    allUsers.innerHTML =  document.getElementById("all_students").children.length;

    let totalDays = document.getElementById("totalResultOfDays");
    totalDays.innerHTML =  document.getElementsByClassName("day").length;


    let totalMisses = document.getElementById("totalMissedDays");
    totalMisses.innerHTML = document.getElementsByClassName("zero").length;
   


//Count Average per-student

for (var i = 0; i < 10; i++) {
    let sum = 0;

        if(document.getElementsByClassName("position"+i).length>0){

            let classPosition = document.getElementsByClassName("position"+i);  
            let userPosition = document.getElementsByClassName("User" + i)[0];  

            for(let o = 0; o < classPosition.length; o++) {
                sum += parseFloat(classPosition[o].innerText); // Sum of all the marks per student
            }
                let perStudentAverage = Math.round(sum / classPosition.length * 100) / 100;
                userPosition.innerText = perStudentAverage;  // Average of all the marks per student
    }
    else {
        document.getElementsByClassName("User" + i)[0].innerHTML = "0";
    }
}

// Count Total average
    let totalAverage = document.getElementsByClassName("student_average");  // average mark of all students
    let sumOfAverage = 0;
    for(let k=0; k<totalAverage.length; k++) {
        sumOfAverage += parseFloat(totalAverage[k].innerHTML);
    }
    let lessValues = Math.round(sumOfAverage / totalAverage.length * 100) / 100;

//Total average of All students goes here

    let totalAverageOfAll = document.getElementById("totalAverageMark");
    totalAverageOfAll.innerHTML = lessValues;


    // A B C
let aorborc = document.getElementById("abc");
if(lessValues <= 1) {
aorborc.innerHTML ="C";
}
else if(lessValues <3 && lessValues > 1) {
    aorborc.innerHTML = "B";
}
else {
    aorborc.innerHTML = "A";
}

}




// Define months
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

// Define the main value - starting day of the course
let startingDay = new Date(2018, 03, 28);



// **************  Create function to Add day ******************

//Create div with a classname of day and append to the main table
function addDay() {
    let setDiv = document.createElement("div");
    setDiv.className="day";
    setDiv.setAttribute("style", "display: inline-block;");
    document.getElementsByClassName("main_table")[0].appendChild(setDiv);


// Create calendar Box - create span with the class of "title" and append to the div with class "day"
    let setDayBox = document.getElementsByClassName("day");
    let span = document.createElement("span");
    span.className="title";
    document.getElementsByClassName("day")[setDayBox.length-1].appendChild(span);


// Define the lessons dates
let weekday = startingDay.getDay();
    if( weekday == 5 ) {
        startingDay.setDate(startingDay.getDate() + 1);
    }
    else {
        startingDay.setDate(startingDay.getDate() + 2);
    }
    span.innerHTML = startingDay.getDate() + " " + monthNames[startingDay.getMonth()];



// create ul > li  -- Create boxes for students, to enter the values(marks)
let allUsers =  document.getElementById("all_students");
let ul = document.createElement("ul");
for(let i=0; i<allUsers.children.length; i++) {
    let li = document.createElement("li");
    let liInside = document.createTextNode("0");
    li.appendChild(liInside);
    ul.appendChild(li);
    li.setAttribute("style", "background-color: red; ");
    li.className="position"+i+" zero";  // zero - for counting total missed lessons
    li.setAttribute("onclick","changeNumber(this)"); // changenumber is defined below
}

let lastSpan = document.getElementsByClassName("title").length;
    let getLastSpan = document.getElementsByClassName("title")[lastSpan - 1];
    getLastSpan.after(ul);

    return updateTable();     // for LIVE pdate
}


// Remove day
function removeDay() {
    let mainTable = document.getElementsByClassName("main_table")[0];
    let childInMain = document.getElementsByClassName("day");
if(childInMain.length > 0){
    mainTable.removeChild(childInMain[childInMain.length - 1]);



/* Remove Calendar day */
let weekday = startingDay.getDay();
let span = document.getElementsByClassName("title");
if( weekday == 6 ) {
    startingDay.setDate(startingDay.getDate() - 1);
}
else {
    startingDay.setDate(startingDay.getDate() - 2);
}
span.innerHTML = startingDay.getDate() + " " + monthNames[startingDay.getMonth()];
}

return updateTable();
}


//  User to input numbers
function changeNumber(clicked_class) {
    let numberByUser = prompt("enter the number");
    if(!isNaN(parseInt(numberByUser))){
    if(parseInt(numberByUser) <= 0 ) {
        numberByUser = 0;
        clicked_class.setAttribute("style", "background-color: red;");
        clicked_class.className = clicked_class.className.replace("nonzero", "zero");
    }
    else if (parseInt(numberByUser) >= 5 ){
        numberByUser = 5;
    }
    if(parseInt(numberByUser) > 0) {
        clicked_class.setAttribute("style", "background-color: green;");
        clicked_class.className = clicked_class.className.replace("zero", "nonzero");
    }
}
else {
    alert("please enter only number");
    return;
}

    clicked_class.innerHTML = numberByUser;
    return updateTable();

}
