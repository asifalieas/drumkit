var len = document.querySelectorAll('.drum').length;

// Detecting button click
for(var i=0; i<len; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){

        var buttonInnerHtml = this.innerHTML;
        playSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml)

    });
}

// Detecting keyboard press
document.addEventListener('keydown',function(event){
    playSound(event.key)
    buttonAnimation(event.key)
});

// Function to play sound
function playSound(keyPressed){

    switch(keyPressed){
        case "w" : var tom1 = new Audio('sounds/tom-1.mp3');
                   tom1.play();
                   break;
        case "a" : var tom2 = new Audio('sounds/tom-2.mp3');
                   tom2.play();
                   break;
        case "s" : var tom3 = new Audio('sounds/tom-3.mp3');
                   tom3.play();
                   break;
        case "d" : var tom4 = new Audio('sounds/tom-4.mp3');
                   tom4.play();
                   break;
        case "j" : var crash = new Audio('sounds/crash.mp3');
                   crash.play();
                   break;
        case "k" : var kick = new Audio('sounds/kick-bass.mp3');
                   kick.play();
                   break;
        case "l" : var snare = new Audio('sounds/snare.mp3');
                   snare.play();
                   break;
        default :  console.log('error');
                   break;
    }
}

// Function for button animation
function buttonAnimation(currentKey){
    var currentButton = document.querySelector("." + currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function(){
        currentButton.classList.remove("pressed");
    }, 100); 
}

