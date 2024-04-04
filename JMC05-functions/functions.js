// console.log("JAVASCRIPT FUNCTIONS")

// // 1) What is a Function
// // 2) Why do we need Functions

// // let a = 1;
// // let b = 2;
// // let c = 3;

// // let sum = a+b
// // let sum2 = sum + 3;
// // let sum3 = sum2 + 4
// // console.log(sum3)

// // sum = a+c
// // sum2 = sum + 3;
// // sum3 = sum2 + 4
// // console.log(sum3)

// // sum = b+c
// // sum2 = sum + 3;
// // sum3 = sum2 + 4
// // console.log(sum3)

// // function addmad(){
// //     sum = b+c
// // sum2 = sum + 3;
// // sum3 = sum2 + 4
// // console.log(sum3)
// // }

// // addmad()


// // function add3(x, y){
// //     let sumx = x+y
// //     let sumy = sumx + 3;
// //     let sumz = sumy + 4
// //     console.log(sumz)
// // }

// // add3(a,b)
// // add3(a,c)
// // add3(b,c)





















// // // Function scoping: Block, Function & Global scope

// // // let has a block scope within a { } but var has a global scope

// // let x = 1;
// // // let y = 2;
// // var z = 3;
// // const a = 4;

// // // a = 100;
// // // // var x = 100;

// // console.log(a)

// // if(true){
// //     var a1 = 10;
// // }

// // if(true){
// //     let x = 5;
// // //     let y = 5;
// //     var z = 9
// //     a1 = 200;
// //     console.log(a1)
// // let com2 = "eyaaa"
// //     console.log(com2)
// //     const a = 90;
// //     console.log("x inside:",x);
// // //     console.log("y inside:",y);
// //     console.log("z inside:",z);
// //     console.log("a inside:",a);
// // }

// // // console.log(com2)

// // console.log("x outside:",x);
// // // console.log(y);
// // console.log("x outside:",z);
// // console.log(a);


// // Fucntion scope: all var, let or const all have fucntion scopr
// // let x = 1;
// // let y = 2;
// // var z = 3;
// // const a = 4;

// // // let x=5

// // function checkScope(){
// //     // x = 5;
// //     // let y = 5;
// //     // var z = 9
// //     // const a = 90;
// //     // console.log("x inside:",x);
// //     // console.log("y inside:",y);
// //     // console.log("z inside:",z);
// //     // console.log("a inside:",a);
// // }
// // checkScope();

// // console.log(x);
// // console.log(y);
// // console.log(z);
// // console.log(a);



// // 7) Pass arguement by Value and by reference
// // let a = 6;

// // let b = a;
// // console.log(a)
// // console.log(b)

// // let x = {c: 2}
// // let y = x

// // console.log(x)
// // console.log(y)

// // let a = 6;
// // let c = {d:2}

// // function yesy(num1, num2){
// //     let b = num1;
// //     let e = num2

// //     console.log("b inside",b)
// //     console.log("e inside",e)

// // }

// // yesy(a, c)

// // console.log("b outside",b)



// // Pass arguement to a function in two ways: by Value and By reference

// // let num1 = 4;
// // let str1 = "red"
// // let car = ['toyota', 'bwm']
// // let boy = {age: 2}

// // // console.log(num1)
// // function display(item){
// //     let item2 = item + 2
// //     console.log(item2)
// // }

// // display(num1)


// let k1 = 2
// let k3 = {a:2}

// console.log(k3.a)
// console.log(k3['a'])

// function add1(x11){
//     console.log(x11.a)
//     x11.a = x11.a * 2

//     // let k2 = x11 + 3;
//     console.log(x11.a);
//     console.log(k3);


// }

// add1(k3)


// let str23 = "amala"

// // alama


// // Simple or value data types are copied or passed by value
// let m = 10;
// let n = 20;

// console.log(m)
// console.log(n)

// n = m;

// console.log(m)
// console.log(n)

// n = 100;

// console.log(m)
// console.log(n)



// // Complex or compound or reference datatypes are copied or passed by reference
// let m1 = {age: 10}
// let n1 = {age:20}

// console.log(m1)
// console.log(n1)

// n1 = m1;

// console.log(m1)
// console.log(n1)

// n1.age=30

// console.log(m1)
// console.log(n1)

// m1.age = 100

// console.log(m1)
// console.log(n1)
let w2 = "grin"
let w3 = "at"
let w1 = "adolf";

threeWords(w1, w2, w3)

function threeWords(str1, str2, str3){
    let newstr = "";
    let endpoint;

    let str1_len = str1.length;
    let str2_len = str2.length;
    let str3_len = str3.length;

//    Get code to do this online
// the function will return anser to endpoint variable
endpoint = Math.max(str1_len, str2_len, str3_len);
// agadrtoilnf

// For loop 0 - 4
for(let i=0; i<endpoint; i++){

    // newstr = newstr + str1[i]
    if(str1[i] != null){
        newstr += str1[i];
    }

    if(str2[i] != null){
        newstr += str2[i];
    }

    if(str3[i] != null){
        newstr += str3[i];
    }
  

}

console.log(newstr)




}


let display = "";
display.innerText += firstarray[i]