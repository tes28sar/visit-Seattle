

function greet(){
console.log('hello seattle '); 
} 

greet();

// let name = 'hello seattle'); 
function displayImage(){
    let output = "";
    let rating = prompt('four')
    for(let i =0; i < rating; i++){
        console.log("this is the output ", output)
        output = output + "<li><img src='needle.jpg'></li>"
    } 
    return document.write(output);
}
// for(let i = 0; i< 2; 1++){
    //  if(i ===3) break; 
//  console.log('i');






// let age = 171; 




// let rating = 4.5;
// let isFun = true; 

// console.log(rating);

// let name = prompt('what is the city name?');/ 
// console.log(name)

function hi(){
    let name = prompt('what is the city name?')
if(name.toUpperCase()=== "SEATTLE"){
    alert("welcome")
}else{
    alert("no, you are not right, it's seattle")
}
}; 


//  console.log(name)
hi(); 

function question(){ 
    let x = prompt('what is a famous landmark in seattle? ')
    if(x.toUpperCase()=== "SPACENEEDLE"){
        alert("you got it!")
    }else{
        alert("answer is Spaceneedle") 
    } 
    
}; 

// console.log(name)/ 
question(); 

function age(){
    let guess = 0;
    while(guess < 4){
        let guessAge = prompt ('how old is seattle');
        if(guessAge === '171'){return guessAge}
        else if (guessAge !== '171')
{
    alert('try again');
    guess++;
}
    
    
    }

}
age();


function famous(){
    let answer = 0;
    while(answer < 2){
        let answerFamous = prompt('name a famous story from seattle');
        if(answerFamous === 'bigfoot'){ return answerFamous}
        else if (answerFamous !== 'big foot') 
       
        {
    alert('try again');
    answer++;}
        }
} 

}
famous();