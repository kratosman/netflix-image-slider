var columns = document.getElementsByClassName('columns')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var row = document.querySelector('.row')

let rowIndexes = columns.length
let current = 0
console.log(columns)
prev.addEventListener('click', () => {
    if(current == 0) {
        current = rowIndexes - 1
    } else {
        current--;
    }
    for(let slides of columns) {
        slides.style.transform = `translate(${current * -100}%)`
    }
    
})
next.addEventListener('click', () => {
    if(current == rowIndexes - 1) {
        current = 0
    } else {
        current++;
    }
    for(let slides of columns) {
        slides.style.transform = `translate(${current * -100}%)`
    }
})

