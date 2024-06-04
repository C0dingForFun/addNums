let numbers = document.querySelector('input')
let calc = document.querySelector('button')
let ans = document.querySelector('span')

function addValues(total, num){ //function for adding numbers
    return eval(`${total} + ${num}`) // total(for reduce parameters) - The initialValue, or the previously returned value of the function.
}

calc.addEventListener('click', ()=> {
    let numTotal = numbers.value.split(',') // converts values in input into an array
    ans.innerText = numTotal.reduce(addValues); // displays answer with reduce and addValues(called) functions
})