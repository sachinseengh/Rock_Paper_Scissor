const result = document.getElementById("result");
const random = Math.floor(Math.random()*3)+1;
console.log(random);

var input=null;

const rockbtn= document.getElementById("rock");
rockbtn.addEventListener('click',function (){
     input=1;
    console.log("r");
    check();
})

const paperbtn= document.getElementById("paper");

paperbtn.addEventListener('click',function (){
     input=2;
    console.log("p");
    check();
})


const scissorbtn= document.getElementById("scissor");

scissorbtn.addEventListener('click',function (){
input=3;
    console.log("s");
check();
})

function check(){

    if(input === random){
        result.innerText="Draw Refresh the page and Try Again";
    }

    if(input===1 && random===2){
        result.innerText="Mine Paper ! You Lose !! Try Again Refreshing the page";
    }else if(input===1 && random===3){
        result.innerText="Mine Scissors ! Congratulations!! You Won!";
    }else if(input===2 && random == 1){
        result.innerText="Mine Rock ! You Lose !! Try Again Refreshing the page";
    }else if(input===2 && random===3){
        result.innerText="Mine Scissors! You Lose !! Try Again Refreshing the page";
    }else if(input === 3 && random ===1){
        result.innerText="Mine Rock! You Lose !! Try Again Refreshing the page";
    }else if(input ===3 && random ===2){
        result.innerText=" Mine Paper! Congratulations!! You Won!";
    }

}



