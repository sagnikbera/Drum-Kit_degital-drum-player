
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i=0; i<numberOfDrumButtons ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
    function handleClick(){

    let buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    //^^Detecting Button Press

    buttonAnimation(buttonInnerHTML);
}
}

//>>Detecting Keyboard Press
document.addEventListener("keydown",keypressed);

function keypressed(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}

function makeSound(key){
    switch(key){
        case "w":
                let tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
        break;
        case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
        break;      
        case "s":
                let tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
        break;   
        case "d":
                let tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
        break;  
        case "j":
                let snare = new Audio("sounds/snare.mp3");
                snare.play();
        break; 
        case "k":
                let crash = new Audio("sounds/crash.mp3");
                crash.play();
        break; 
        case "l":
                let kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
        break;
        
        default:console.log(buttonInnerHTML)
    } 
}

//>>Adding animation for click
function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    //^^Pull out .passed from styles.css
    setTimeout(deacitiveButton,100);
    function deacitiveButton(){
        activeButton.classList.remove("pressed");
    }
}





    // // document.querySelector("button").addEventListener("click", handleClick);
    // // //not handleClick()
    // // function handleClick(){
    // //     alert("I got clicked");
    // // }

    // document.querySelector("button").addEventListener("click", function (){
    //     alert("I got clicked");
    // });





    // let snare = new Audio("sounds/tom-1.mp3");
    // snare.play();

    // function Audio(fileLocation){
    //     this.fileLocation = fileLocation;
    //     this.play = function(){
    //         //Tap into the audio hardware
    //         //Check the file at fileLocation exists
    //         //Check the file at fileLocation is sound file
    //         //Play the file at fileLocation
    //     }
    // }