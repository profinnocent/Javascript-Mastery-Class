console.log("FETCH API");

console.log("first 12");

/*
CRUDS: Create, Read, Update, Delete & Search
Types of request:
GET: used to request and retieve data (GET ONE & GET  ALL)
POST: used to send data
UPDATE: used to update or edit data
PATCH: also used to update or edit a part or some part of a data
DELETE: used to delete or remove a data set

Snytax of fetch api
XML
JSON = {"key": "value"} 

json = {key: 'value'}

fetch("file name or url ")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))
*/

// GET examples
function getData() {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data[0]);
      console.log(data[1]);
      console.log(data[2]);
      console.log(data[2].name);

      console.log(data[1][3]);
      // alert(data);
    })
    .catch((error) => console.log("An error occured please try again"));
}

// getData();

// function getUser() {
//     fetch("user.json")
//       .then((res) => res.json())
//       .then((user) => {
//         console.log(user);

//         let username = document.getElementById('username')
//         console.log(user[0].name)

//         username.innerText = user[0].name

//         // alert(data);
//       })
//       .catch((error) => console.log("An error occured please try again"));
//   }

// //   getUser();

// // GET from external resource (GET ALL)
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res => res.json())
// .then(data => {
//     console.log(data)

//     let mytable = document.querySelector('table')
//     mytable.innerHTML = "";
//     mytable.innerHTML = `
//     <tr>
//     <th>ID</th>
//     <th>NAME</th>
//     <th>EMAIL</th>
//   </tr>    `;

//     data.forEach(element => {
//         mytable.innerHTML += `
//         <tr>
//         <td>${element.id}</td>
//         <td>${element.name}</td>
//         <td>${element.email}</td>
//       </tr>
//         `
//     });
// })
// .catch(err => console.log(err))

// // GET from external resource (GET ONE)
// fetch("https://jsonplaceholder.typicode.com/users/2")
// .then(res => res.json())
// .then(data => {
//     // console.log(data)

//     let mytable = document.querySelector('table')
//     mytable.innerHTML = "";
//     mytable.innerHTML = `
//     <tr>
//     <th>ID</th>
//     <th>NAME</th>
//     <th>EMAIL</th>
//   </tr>    `;

//     data.forEach(element => {
//         mytable.innerHTML += `
//         <tr>
//         <td>${element.id}</td>
//         <td>${element.name}</td>
//         <td>${element.email}</td>
//       </tr>
//         `
//     });
// })
// .catch(err => console.log(err))

// const url = 'https://jgentes-crime-data-v1.p.rapidapi.com/crime?startdate=9%2F19%2F2015&enddate=9%2F25%2F2015&long=-122.5076392&lat=37.757815';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		"X-RapidAPI-Key": "1b545fe06emshf7216828e003432p177154jsncb4288766ce5",
// 		"X-RapidAPI-Host": "gentes-Crime-Data-v1.p.rapidapi.com"
// 	}
// };

// 	fetch(url, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
// 	.catch(err => console.log(err))

// Random user api @ https://randomuser.me
// const randomUserUrl = 'https://randomuser.me/api/';

// 	fetch(randomUserUrl)
//     .then(response => response.json())
//     .then(data => console.log(data))
// 	.catch(err => console.log(err))

//     const url = 'https://meteostat.p.rapidapi.com/stations/hourly?station=10637&start=2020-01-01&end=2020-01-01&tz=Europe%2FBerlin';

//     let url2 = 'https://meteostat.p.rapidapi.com/stations/meta?id=10637'
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '1b545fe06emshf7216828e003432p177154jsncb4288766ce5',
//             'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
//         }
//     };
// let url1 = "'meteostat.p.rapidapi.com'"
//     fetch(url2)
//     .then(response => response.text())
//     .then(data => console.log(data))
// 	.catch(err => console.log(err))

// // POST examples
// // Create a user
// let configData = {
//     method:"POST",
//     accept:"application/json",
//     body:JSON.stringify({
//         id:12,
//         body:"This is post 101",
//         title:"Post 101",
//         userId:1
//     })
// }
// fetch("https://jsonplaceholder.typicode.com/posts", configData )
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })
// .catch(err => console.log(err))

// Todo App

// 1) GET All: Get all the todos
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     let filteredArray = data.filter((item) => item.title.includes("us"));

//     console.log(filteredArray);


//     let todoArray = data;

//     todoArray.push({
//         userId: 6,
//         id: 202,
//         completed: false,
//         title: "crazy man"
//     },
//     {
//         userId: 808,
//         id: 20200,
//         completed: false,
//         title: "crazy man"
//     }
//     )

//     console.log(todoArray)
//   })
//   .catch((err) => console.log(err));

// // 2) GET One: get a todo with a specific id
// fetch("https://jsonplaceholder.typicode.com/todos/2")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)

//   })
//   .catch((err) => console.log(err));

// 3) Create One (POST): create a todo
// let configData = {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     userId: "bar",
//     completed: false,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/todos", configData)
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data)
//     // alert("Todos fetched successfully")
//   })
//   .catch((err) => console.log(err));

// 4) Update one (PUT): updates (overwrites) a todo with a provided id
// let configPut = {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "prof22",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/todos/2", configPut)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // alert("Todos fetched successfully")
//   })
//   .catch((err) => console.log(err));

// 5) Update some (PATCH): updates a todo with a provided id
// let configPatch = {
//     method: 'PATCH',
//     body: JSON.stringify({
//       title: 'prof22'
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       }
// }

//  fetch('https://jsonplaceholder.typicode.com/todos/3', configPatch )
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         // alert("Todos fetched successfully")
//     })
//     .catch(err => console.log(err))

// 5) Update some (PATCH): updates a todo with a provided id
// let configDelete = {
//   method: "DELETE",
// };

// fetch("https://jsonplaceholder.typicode.com/todos/3", configDelete)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // alert("Todos fetched successfully")
//   })
//   .catch((err) => console.log(err));


// Search (GET using query string): search by userid
// fetch("https://jsonplaceholder.typicode.com/todos?userId=2")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

// Search (GET using query string): search by title

// fetch("https://jsonplaceholder.typicode.com/todos?title=delectus")
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

  // Search (GET using query string): search by id

// fetch("https://jsonplaceholder.typicode.com/todos?id=2")
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((err) => console.log(err));


/*

C - create one POST
R - Get All or GET one
U - PUT one or PATCH one 
D - Delete one
S - Get One or Get Group (search / filter)

TASK

1) Create a user profile page using the randomuser.me api

2) create a waether app that can display the wweather conditions for any city in the world

3) Create an app that can display all states or cities in any selected country


*/