let myBox = document.getElementsByClassName('box');

// console.log(myBox.length)
// console.log(myBox)

let boxArray = [];


let eachbox = function(){
    for(let i=0; i<myBox.length; i++) {
        let eachBoxInner = myBox[i].innerText;
        boxArray.push(eachBoxInner); 
        // console.log(eachBoxInner);
    }
    console.log(boxArray);
}
eachbox();

//console.log(boxArray)

function randomFunction() {
    
    let random = Math.floor(Math.random() * 20);
    
    for(let j=0; j<boxArray.length; j++){
        // console.log(myBox[j])
        if(parseInt(myBox[j].innerHTML) === random) {
            myBox[j].style.backgroundColor="red";
            console.log(myBox[j].innerHTML);
            console.log(random);
            console.log(myBox[j])
        }
    }

}
randomFunction();