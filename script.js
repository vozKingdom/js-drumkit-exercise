window.addEventListener('keydown', (event) => {
    const audio = document.querySelector(`audio[data-key$="${event.keyCode}"]`)
    
    const key = document.querySelector(`.key[data-key$='${event.keyCode}']`)
    
    if(!audio) return;

    audio.currentTime = 0;  
    audio.play();

    key.classList.add('playing') 
}
)


const keys = document.querySelectorAll('.key') // use output of querySelectorAll with forEach method. 


keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
    }
)  //forEach applies a function on each array item. 

function removeTransition(event) {
    console.log(event) // console.log event object to see events unique set of properties
    if (event.propertyName !== 'transform') {  // each event has own set of properties. access using console.log(event) to see them. manipulate event.propertyName property to alter css style   
        return;
    } else {
        this.classList.remove('playing')   //'this' is always equal to whatever it was called against. in this case its the 'key' object from the .addeventlistener function it was called from. if unsure, use console.log(this) to find the source
    }
}
