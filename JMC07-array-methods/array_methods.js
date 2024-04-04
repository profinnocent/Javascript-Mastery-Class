console.log("test")

// Array map
// Array filter
// Array reduce
// ForEach

let str = ["a", "b", "c", "d"]
let cars = ["toyota", "BMW", "Honda", "GMX"]

// for(let i=0; i<str.length; i++){
//     console.log(i+'. '+str[i]);
// }


let m11 = function (index){
    console.log(index + ". ")
}



// Array ForEach
// str.forEach(xmen)

// cars.forEach(function (item, index){
//     console.log(index + ". " + item)
// })

function xmen(item, index){
    console.log((index+1) + ". " + item)
}


cars.forEach(xmen)

// Array Map
cars.map(xmen)


let cars_pool = ""
let carsArray = []
// Array filter : 
for(let i=0; i<cars.length; i++){
    if(!cars[i].includes("X")){
        cars_pool += cars[i] + " ";
        carsArray.push(cars[i])
    } 
}

console.log(carsArray)
console.log(cars_pool)

let filteredCars = cars.filter(function (item){
    return !item.includes("X")
})

console.log(cars)
console.log(filteredCars)


// If block one liner
// let mad = 1
// if(mad == 2) console.log("1 true")


// Array Reduce
let num = [1,2,3,4,5]

let accc = 0;
for(let i=0;i<num.length;i++){
    accc += num[i];
}

console.log(accc)

let answer = num.reduce(calSum)

function calSum(sum, item){
    return sum + item;
}

console.log(answer)

console.log(cars.reduce(function (sum, item){
    return sum + item;
}))

/*


1. a
2. b
3. c
4. d


*/


let = [["a", "b", "c"],["d", "e", "f"],["g", "h", "i"]];

prompt("Enter first word")