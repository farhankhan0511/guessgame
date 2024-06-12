
// // // // // // // // let marks=[]
// // // // // // // // let sums=0

// // // // // // // // for (let i=0;i<5;i++){
// // // // // // // //     mark=Number(prompt(`Enter the marks of subject ${i+1}`))
// // // // // // // //     if (mark<0 || mark>100){
// // // // // // // //         mark=Number(prompt(`Renter the marks of subject ${i+1} between 1-100`))
// // // // // // // //     }
// // // // // // // //     marks.push(mark)
// // // // // // // //     sums+=mark
// // // // // // // // }

// // // // // // // // let percentage=(sums/500)*100
// // // // // // // // let stat=true
// // // // // // // // let grade=""
// // // // // // // // for (let i of marks){
// // // // // // // //     if (i<40){
// // // // // // // //         stat=false
// // // // // // // //     }
        
// // // // // // // // }
// // // // // // // // if (stat){
// // // // // // // //     if (percentage>70){
// // // // // // // //         grade="A"
// // // // // // // //     }
// // // // // // // //     else if (percentage>50){
// // // // // // // //         grade="B"
// // // // // // // //     }
// // // // // // // //     else{
// // // // // // // //         grade="C"
// // // // // // // //     }
// // // // // // // //     console.log(`You passed with ${percentage}% percentage and grade ${grade}`)
    
    
// // // // // // // // }
// // // // // // // // else{
// // // // // // // //     console.log("You failed")
// // // // // // // // }


// // // // // // // // // num1=Number(prompt("enter the number1:"))
// // // // // // // // // num2=Number(prompt("Enter the number2:"))

// // // // // // // // // if (num1>num2){
// // // // // // // // //     console.log(`${num1} is greater than ${num2}`)
// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // //     console.log(`${num2} is greater than ${num1}`)
// // // // // // // // // // }

// // // // // // // // // num3=Number(prompt("ENter the number3:"))

// // // // // // // // // if (num1>num2){
// // // // // // // // //     if (num3>num1){
// // // // // // // // //         console.log(num3)
// // // // // // // // //     }
// // // // // // // // //     else{
// // // // // // // // //         console.log(num1)
// // // // // // // // //     }
// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // //     if (num3>num2){
// // // // // // // // //         console.log(num3)
// // // // // // // // //     }
// // // // // // // // //     else{
// // // // // // // // //         console.log(num2)
// // // // // // // // //     }
// // // // // // // // // }


// // // // // // // // // let gender=prompt('Enter the gender: ')
// // // // // // // // // let age=Number(prompt("Enter the age: "))

// // // // // // // // // if (gender=="male"){
// // // // // // // // //     if(age>21){
// // // // // // // // //     console.log("Eligible for marriage")
// // // // // // // // // }

// // // // // // // // // else{
// // // // // // // // //     console.log("Not eligible for marriage")
// // // // // // // // // }
// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // // if (gender=="female" && age>18){
// // // // // // // // //     console.log("Eligible for marriage")
// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // //     console.log("Not eligible for marriage")
// // // // // // // // // }
// // // // // // // // // }

// // // // // // // // // if((gender=="male" && age>21) || (gender=="female" && age>18)){
// // // // // // // // //     console.log("Eligible for marriage")

// // // // // // // // // }
// // // // // // // // // else{
// // // // // // // // //     console.log('Not elligible for marriage')
// // // // // // // //         // if (gender==male){
// // // // // // // //         //     console.log("chala ja b$")
// // // // // // // //         // }
// // // // // // // //         // if (gender==female){
// // // // // // // //         //     console.log("Ja  na lav")
// // // // // // // //         // }
// // // // // // // // // }



// // // // // // // for(let i=1;i<101;i++){
// // // // // // //     if (i%3==0 && i%5==0){
// // // // // // //         console.log("fizzbuzz")
// // // // // // //     } 
// // // // // // //     else if(i%5==0){
// // // // // // //         console.log("buzz")
// // // // // // //     }
// // // // // // //     else if(i%3==0){
// // // // // // //         console.log("fizz")
// // // // // // //     }
// // // // // // //     else{
// // // // // // //         console.log(i)
// // // // // // //     }
// // // // // // // }
// // // // // // n=Number(prompt("Enter the no of times to repeat"))
// // // // // // for (let i=1;i<n+1;i++){
// // // // // // //    for(let j=0;j<i;j++){
// // // // // // //         console.log( ` ${i} machli`)
// // // // // // //    }
// // // // // // //    for(let j=0;j<i;j++){
// // // // // // //     console.log("Paani me gayi")
// // // // // // //     }
// // // // // // //     for(let j=0;j<i;j++){
// // // // // // //         console.log("Chapaaak!!!!")
// // // // // // //         }
// // // // // // console.log( ` ${i} machli`.repeat(i))
// // // // // // console.log("Paani me gayi".repeat(i))
// // // // // // console.log("Chapaaak!!!!".repeat(i))
// // // // // // }





// // // // // num=Number(prompt("Enter the number: "))


// // // // // for (let i=1,j=10; i<11 ; i++, j--) {
// // // // //     console.log(`${num}*${i}=${num*i} \t ${num}*${(j)}=${num*(j)}`)
// // // // // }
// // // // let f0=0
// // // // let f1=1
// // // // for (let i=0;i<10;i++){
    
// // // //     if (i==0){
// // // //         console.log(f0)
// // // //     }
// // // //     else if (i==1){
// // // //         console.log(f1)
// // // //     }
// // // //     else{
// // // //         fn=f0+f1
// // // //         console.log(fn)
// // // //         let temp=f1
// // // //         f1=fn
// // // //         f0=temp
// // // //     }
// // // // }

// // // for (let i=0;i<20;i++){
// // //     // if (i==13){
// // //     //     continue
// // //     // }
// // //     // console.log("floor no ",i)
// // //     // if (i==13){
// // //     //     break
// // //     // }
// // // }

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
console.log(jackpot)
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
