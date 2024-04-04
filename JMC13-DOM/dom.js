console.log("test");

const section = document.querySelector("section");

function addBlock() {
  section.innerHTML += `<div style="display: flex;padding: 20px;margin: 10px;justify-content: space-around;background-color: green;">
<button>Change Colour</button>
<div style="width: 50px;height: 50px;background-color: red;"></div>
</div>`;
}




/*
HOMEPLAY
Run the code above, Study and understand the code block above both the html and js file and complete the following:


Write a code that:
1) the "Add Block" button adds a new block inside the section using the addBlock function already provided
1) when you click the "change color button", it changes the colour of its mother div and its sister div respectively to any random color of either RED, ORANAGE, YELLOW, GREEN, BLUE, INDIGO and VIOLET
2) The color of the mother div and the color of the child div must never be the same)
3) If you click the child div or block, only the colour of its mother div changes
4) If you click the mother div, the colour of all the child divs or block in all the mothers div becomes the same
5) Write a function for the "Remove a Mother div with a given colour" button that removes any mother with a specified colour from the DOM
5) Write a function for the "Remove a child div with a given colour" button that removes any mother div from the DOM whose child div has a specified colour from the DOM


NOTE AGAIN: DO NOT WRITE ANYTHING IN THE HTML DOCUMENT OR ADJUST WHAT HAS BEEN WRITTEN ALREADY IN THE JS FILE, JUST ADD MORE CODE TO THE JS FILE ONLY AND EVERYTHING YOU DO MUST BE IN THE JS FILE ALONE
*/