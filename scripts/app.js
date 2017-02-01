/* JavaScript lives here */

console.log("App Started");

//declare/initialize firstHeading variable
//firstHeading creates a link to the h1 element on the page 
var firstHeading = document.getElementById("firstHeading");

//can use firstHeading js variable as though it is the html h1 element
console.log(firstHeading.textContent);

firstHeading.textContent = "Bla bla bla";
//this will destroy your document/overwrite it
//document.write(firstHeading.textContent);

//dont use this
//window.alert(firstHeading.textContent);




//*****For assignment 1 do these three steps
//1. create reference to an element id (reference variable)
var firstParagraph = document.getElementById("firstParagraph");

//2. create a variable that contains content (content variable)
var myContent = "It was a sunny day in Florida. Blah blah blah.";

//3. assign variable with content to the reference variable ()
firstParagraph.textContent = myContent;


var secondParagraph = document.getElementById("secondParagraph");

var myHTMLcontent = "<h2>Second Heading</h2>"
				+ "<p> This is the second paragraph</p>";
secondParagraph.innerHTML = myHTMLcontent;


//create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the click function
clickMeButton.addEventListener("click", clickMe);

//click function - used as an event handler
function clickMe(){
	console.log("Clicked!");
}
//

//link targetArea as an id inside a div tag?
var targetArea = document.getElementById("targetArea");

thirdParagraph = "<h3>Third Paragraph</h3>"
				+ "<p>This is my third paragraph</p>";
//var thirdParagraph = document.createElement("p");

//var snippet = p.createTextNode("This is a third paragraph.");

//targetArea.appendChild(snippet);

targetArea.innerHTML = thirdParagraph;