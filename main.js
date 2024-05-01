const counterElement = document.getElementById('counter');
const counterIncrement = document.getElementById('increment');
const counterDecrement = document.getElementById('decrement');

let counter = 0;

counterIncrement.addEventListener('click', ()=>{
    counter++;
    counterElement.innerText = counter;
});

counterDecrement.addEventListener('click', ()=>{
    counter--;
    counterElement.innerText = counter;
})