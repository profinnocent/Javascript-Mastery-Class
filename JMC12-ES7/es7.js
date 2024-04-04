// console.log("test")

//(1) Tenary opeartor
// let ans = 3;
// if(ans == 1){
//     console.log("true")
//     console.log("comot for road")
// }
// else{
//     console.log("crazy")
// }

// let ans1 = ans==1 || ans == 3 ? console.log("true") : console.log("crazy")


// (2)Coalescing operator
// Only used when check for whether a variable is null or undefined
// let lastname = "dafault";

// let funname = lastname == "default" ? "ebere " + lastname : "ebere " + "Ojukwu"

// let lastname1 = lastname ?? "Ojukwu"

// console.log("lastname1 : ", lastname1)

// let funname = "ebere " + lastname;

// console.log(funname)


// 3) exponenetial
// console.log(2*2*2)

// console.log(Math.pow(2,3))

// console.log(2**3) //es7

// 4) Arrow function

// function addtwo(x,y){
//     return x+y
// }

// let addtwo = (x,y)=>{
// return x+y
// }

// console.log(addtwo(2,3))


// 5) Destructuring
// let colors = ['one', 'two', 'three']

// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])

// let [a, c, d, e] = colors

// console.log(a);      // one
// console.log(c);     // two 
// console.log(d);   // three
// console.log(e);   // three

// Destrcuturing with Objects
// const user = {
//     id: 1,
//     name: "Ali",
//     age: "30"
// }

// // lets extract the user name only
// const { fullname, age } = user

// console.log(fullname);  // Ali
// console.log(age);  // Age
// console.log(user.age)


// 6) spread operator (...)
// let alpha = ["a","b","c"]
// let alpha2 = ["x", "y", "z"]

// // console.log(...alpha)

// // // let alpha1 = alpha
// // // alpha1.push("d")

// // let alpha1 = [...alpha,"d","e"]

// // let alpha1 = alpha.concat(alpha2)
// let alpha1 = [...alpha,...alpha2]

// console.log(alpha1)

let str = "you";

console.log([...str])


// DOM scrapping & dynamic event handler attachment

/*
an add button adds a div block to the screen with a random color

when the block is clicked the first time, it writes the colour of the div block on it

when the block is clicked a second time, it wipes the text out and changes the background colour to another random colour.

and so on

*/