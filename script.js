let boxWrapper = document.getElementById("box-wrapper");
let oneBox = document.querySelectorAll('.one-box');
let box = document.getElementsByClassName('div')[0];


for(let i=0; i<6; i++){
    let setOneDiv = document.createElement('div');
    setOneDiv.className = "one-box";

    for(let i=0; i<6; i++){
    let setDiv = document.createElement("div");
    setDiv.className = "box";
    setOneDiv.appendChild(setDiv);
    }
        document.getElementById("box-wrapper").appendChild(setOneDiv);
    }


    let childOfBoxWrapper = boxWrapper.children;
    for(let i=0; i<6; i++){
        let childOfOneBox = document.getElementsByClassName("one-box")[i].children;
        childOfOneBox[2].style.backgroundColor = "red";
        childOfOneBox[3].style.backgroundColor = "red";
    }
 
    let middleBox1 = document.getElementsByClassName('one-box')[2];
    let middleBox2 = document.getElementsByClassName('one-box')[3];
    middleBox2.style.backgroundColor = "yellow";
    middleBox1.style.backgroundColor = "yellow";



    let colorfulChild = middleBox1.children[2];
    let colorfulChild1 = middleBox1.children[3];
    if(colorfulChild.style.backgroundColor == "red" || colorfulChild1.style.backgroundColor == "red"){
        colorfulChild.style.backgroundColor = "yellow";
    }

    let colorChild = middleBox2.children[2];
    let colorChild1 = middleBox2.children[3];
    if(colorChild.style.backgroundColor == "red" || colorChild1.style.backgroundColor == "red"){
        colorChild1.style.backgroundColor = "yellow";
    }
    


    //console.log(childOfOneBox)
    
