const result = document.getElementById("result");
const random = Math.floor(Math.random()*3)+1;


var input=null;

const rockbtn= document.getElementById("rock");
rockbtn.addEventListener('click',function (){
     input=1;
    
    check();
})

const paperbtn= document.getElementById("paper");

paperbtn.addEventListener('click',function (){
     input=2;
 
    check();
})


const scissorbtn= document.getElementById("scissor");

scissorbtn.addEventListener('click',function (){
input=3;
    
check();
})


let step =0;

function check(){
    step ++;
if(step===1){

    if(input === random){
        result.innerText="Draw Refresh the page and Try Again";
    }

    if(input===1 && random===2){
        result.innerText="Mine Paper ! You Lose !! Try Again Refreshing the page";
    }else if(input===1 && random===3){
        result.innerText="Mine Scissors ! Congratulations!! You Won!";
    }else if(input===2 && random == 1){
        result.innerText="Mine Rock! Congratulations !! You Won";
    }else if(input===2 && random===3){
        result.innerText="Mine Scissors! You Lose !! Try Again Refreshing the page";
    }else if(input === 3 && random ===1){
        result.innerText="Mine Rock! You Lose !! Try Again Refreshing the page";
    }else if(input ===3 && random ===2){
        result.innerText=" Mine Paper! Congratulations!! You Won!";
    }
}else{
    result.innerText="You have already Choosen! Restart The game";
}
}


const restartbtn = document.getElementById("restart");

restartbtn.addEventListener('click',function(){
    location.reload();
})




