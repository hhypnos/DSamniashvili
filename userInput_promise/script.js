let afterForm = document.getElementById("afterform");
let myImage = document.getElementById("image");
let birthDay = document.getElementsByClassName("birth-day");

let day = document.getElementsByClassName("day")[0].value;
let month = document.getElementsByClassName("month")[0].value;
let year = document.getElementsByClassName("year")[0].value;
let city = document.getElementsByClassName("city")[0].value;
let about = document.getElementsByClassName("about")[0].value;

//let wait = document.getElementsByClassName("waiting")[0];


function toStart(){

    let div = document.createElement("div");
    div.className = "waiting";
    div.innerHTML = "Please Wait...";
    wrapper.appendChild(div);
    let myTime = makePromise(2000);

myTime

.then( (result) => {
    saveFunction();
     })
     .catch( (error) => {
        console.log(error.message);
    });
}



function saveFunction(){
    let birthDay = document.getElementsByClassName("birth-day")[0];
    birthDay.innerHTML = document.getElementsByClassName("day")[0].value;


    let birtMonth = document.getElementsByClassName("birth-month")[0];
    birtMonth.innerHTML = document.getElementsByClassName("month")[0].value;

    let birtYear = document.getElementsByClassName("birth-year")[0];
    birtYear.innerHTML = document.getElementsByClassName("year")[0].value;

    let cityName = document.getElementsByClassName("city-name")[0];
    cityName.innerHTML = document.getElementsByClassName("city")[0].value;

    let aboutMe = document.getElementsByClassName("about-me")[0];
    aboutMe.innerHTML = document.getElementsByClassName("about")[0].value;

    if(afterForm.style.display=='none' && myImage.style.display=='none') {
        afterForm.style.display='block';
        myImage.style.display='block';
      }
}

//   if(document.getElementsByClassName("waiting")[0].style.display =='block'){
//     document.getElementsByClassName("waiting")[0].style.display ='none';
// }

function makePromise (time){
    
    return new Promise(function(resolve, reject){
        setTimeout( () => {
            if(time > 2000) {
                reject(new Error("Too long time"));
            }
            else {
                resolve(`OK its ${time}`);
            }
        }, time)
    });
}