let myBox = document.getElementsByClassName('box');
let allbox = document.querySelectorAll('.box');
// console.log(myBox.length)
// console.log(myBox)

// let boxArray = [];


// let eachbox = function(){
//     for(let i=0; i<myBox.length; i++) {
//         let eachBoxInner = myBox[i].innerText;
//         boxArray.push(eachBoxInner); 
//         // console.log(eachBoxInner);
//     }
//     console.log(boxArray);
// }
// eachbox();

//console.log(boxArray)

function randomFunction() {
    
    let random = Math.floor(Math.random() * 10);
    //console.log(random)
    for(let j=0; j<myBox.length; j++){
        //console.log(myBox[j])
        // debugger;
        //console.log(parseInt(myBox[j].textContent))

        if(parseInt(myBox[j].textContent) == random) {
            if(!myBox[j].classList.contains('color1')){
                myBox[j].classList.add("color1");
            }
            else if(myBox[j].classList.contains("color1")){
                myBox[j].classList.add("color2");
                myBox[j].classList.remove("color1");       
            }
           
            else if(myBox[j].classList.contains("color2")){
                myBox[j].classList.add("color3");
                myBox[j].classList.remove("color2");
            }
            
            console.log(myBox[j].textContent);
            console.log(random);
            console.log(myBox[j])
        }
    }

}
randomFunction();
