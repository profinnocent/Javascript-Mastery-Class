console.log("Local Storage")

const div = document.querySelector('.div1')

const colors = ["red", "yellow", "violet"]

// Update color of block on load or refresh
div.style.backgroundColor = colors[localStorage.getItem('block-color')]

div.addEventListener('click', ()=>{
    let ranint = Math.floor(Math.random()*3 )
    console.log(ranint)

    // save color to localstorage too
    localStorage.setItem('block-color', ranint)
    div.style.backgroundColor = colors[ranint]
})



localStorage.setItem('colorarray', JSON.stringify(colors))

console.log(JSON.parse(localStorage.getItem('colorarray')))

let carr = JSON.parse(localStorage.getItem('colorarray'))

carr.push("magenta")

console.log(carr)
/*
CRUD
*/

// CREATE
// localStorage.setItem('colors', colors[1])

// // Read or GET
// let mycolor = localStorage.getItem('colors')
// console.log(mycolor)

// // Update
// localStorage.setItem('colors', colors[0])

// // delete
// localStorage.removeItem('colors')

// mycolor = localStorage.getItem('colors')
// console.log(mycolor)