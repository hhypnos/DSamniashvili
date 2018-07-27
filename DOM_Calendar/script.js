let week = ['SUN', 'MON','TUE','WED', 'THU','FRI','SAT'];
let monthNames = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let arr = [];
let weli = prompt("enter the year, please");
let tve = prompt("Enter the month, please");
let todayDate = new Date().getDate();


function createCalendar(elem, year, month){

    let date = new Date(year, month);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(); //4
    let firstDate = new Date(date.getFullYear(), date.getMonth(), 1).getDate(); //1

    console.log(firstDay)
    console.log(firstDate)
    let lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();  //28
    console.log(lastDate)
    

    let day = new Date(year + "-" + month + "-01").toDateString();



  let table = document.createElement('table');
  table.setAttribute('style', 'border: 1px solid black');


  let tr = document.createElement('tr');
  table.appendChild(tr);
  //tr.setAttribute('style', 'border: 2px solid black ');

  for (let i = 0; i < 7; i ++){
      let weekDays = document.createElement('th');
      //weekDays.setAttribute('style', 'border: 1px solid black');
      weekDays.textContent = week[i];
      tr.appendChild(weekDays);  
  }


//create the tr and add the first days
for(let k=0; k<6; k++) {
      let firstTr = document.createElement('tr');
      table.appendChild(firstTr);
      //firstTr.setAttribute('style', 'border: 2px solid black');

       for(let j = 0; j < 7; j++){ 
        let numbers = document.createElement('td');
        //numbers.setAttribute('style', 'border: 1px solid black; width:50px; height: 20px');
        firstTr.appendChild(numbers);
        arr.push(numbers);
        
      }  
    } 
    console.log(arr) //42 items
// for(let i = firstDay; i <= lastDate; i++) {
    for (let z = firstDate, i = firstDay; z <= lastDate; z++, i++) {
        arr[i].innerHTML = z;
    }
// if(todayDate){
//     console.log(todayDate);
//     //todayDate.setAttribute('style', 'border: 1px solid black')

// }
elem.appendChild(table);
}

createCalendar(mainDiv, weli, tve);
