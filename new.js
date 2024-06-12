


const buttons=[]
guess=-1
wing=document.getElementById("win")
conti=document.getElementById("overlay")

for(let i=1;i<101;i++){
    elem="butn-"+i
     buttons[i]=document.getElementById(elem);
     
    buttons[i].addEventListener("click",()=>{
        guess=Number(buttons[i].innerHTML);
        makeguess(guess);

        
    })
}



let attempts=20
win=false
let jackpot=Number(Math.round(Math.random()*100))

let difficulty=prompt("ENter the difficulty  easy 20  ,medium 10  ,hard  5")
if (difficulty=="easy"){
    attempts=20
}
else if (difficulty=="medium"){
    attempts=10
}
else if (difficulty=="hard"){
    attempts=5
}
else{
    attempts=20
}

function makeguess(guess){
    if (attempts>0){

        if (guess==jackpot){
        
            alert("YOu win ")
            win=true
            conti.style.display='block';
            wing.style.display='flex';
            
            



            return
        }
    
        
        else if (guess>jackpot){
            alert(`Your guess ${guess} is greater than jackpot try lower \n attempts left ${attempts-1}`)
            for (let i=guess;i<=100;i++){
                buttons[i].style.backgroundColor = "gray";
            }
        }
        else if (guess<jackpot){
            alert(`The guess ${guess} is lower than jackpot try higher \n attempts left ${attempts-1}`)
            for (let i=guess;i>0;i--){
                buttons[i].style.backgroundColor = "gray";
            }
            }
        
    }
    attempts=attempts-1
    if (attempts==0 && !win){

        alert("YOu Lost ")
        alert(`The answer was ${jackpot}`)
    }
    
    
    
    
}
