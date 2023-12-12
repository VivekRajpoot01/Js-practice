// Event is very important part of the JavaScript and it occurs when we perform any action on the window such as if we click
// a button then a 'click' event occured and we have to add event-listener that listen what action we have to have to perform
// by adding function into it

// we can change the background color with the help of a event listener
// such as we have created a button <button>Change Color</button>
// now we have to add event listener on the button so that if we click on the button the specific action performed

const btn = document.querySelector("button");

// now we are creating a function to generate a random value for changing the background color

function random(number){
    return Math.floor(Math.random() * (number+1));
}

// now we have to addEventListener on the btn variable 

btn.addEventListener("click", ()=>{
    const rndcol = `rgb($(random(255),$random(255),$(random(255))))`;
    document.body.style.backgroundColor = rndcol;
})

// By using this way we can add event