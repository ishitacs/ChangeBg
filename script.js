const button = document.querySelector('button');
const h1El= document.querySelector('h1');
const bgEl = document.querySelector('section');

button.addEventListener('click',() => {
    let color='#';
    let userInput= document.getElementById("userInput").value;
    color+=userInput;
    bgEl.style.backgroundColor=color;
    h1El.innerText=color;
    console.log(color);
    console.log(userInput)
}
)